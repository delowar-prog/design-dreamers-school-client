
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const {loginWithGoogle}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleGoogleLogin=()=>{
        loginWithGoogle()
        .then(result=>{
            const loggedUser=result.user 
            console.log(loggedUser)
            navigate('/')
        })
        .catch(error=>console.log(error.message))
    }
    return (
        <button onClick={handleGoogleLogin} className="btn btn-outline border-gray-400 hover:bg-gray-300 hover:text-gray-800 gap-2">
            <FcGoogle className='text-xl'></FcGoogle>
            <span className="text-red-500">Continue with Google</span>
        </button>
    )
}

export default SocialLogin