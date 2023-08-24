import { useContext } from "react"
import { authContext } from "../provider/AuthProviders";


const useAuth=()=>{
    const auth=useContext(authContext)
    return auth
}

export default useAuth;