import { useContext } from 'react'
import { AuthContext } from '../provider/authProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
  const {user, loading}=useContext(AuthContext)
  const location=useLocation()
  if(loading){
    return <p>Loading ....</p>
  }
  if(user){
    return children
  }
  return <Navigate to="/login" state={{from:location}} replace/>
}

export default PrivateRoutes