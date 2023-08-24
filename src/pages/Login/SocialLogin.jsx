import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { json, useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSocialLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                const saveUserInfo = { name: loggedUser.displayName, email: loggedUser.email }
                fetch(`https://summer-camp-fashion-design-server.vercel.app/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUserInfo)
                })
                    .then(res => res.json())
                    .then(() => {
                        return navigate(from, { replace: true })
                    })
            })
            .catch(error => console.log(error.message))
    }
    return (
        <button onClick={handleSocialLogin} className="btn btn-outline border-gray-400 hover:bg-gray-300 hover:text-gray-800 gap-2">
            <FcGoogle className='text-xl'></FcGoogle>
            <span className="text-red-500">Continue with Google</span>
        </button>
    )
}

export default SocialLogin