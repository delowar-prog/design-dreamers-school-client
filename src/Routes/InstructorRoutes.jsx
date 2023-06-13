import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import useInstructor from '../hooks/useInstructor'
import { Navigate} from 'react-router-dom'

const InstructorRoutes = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    const [isInstructor,isInstructorLoading]=useInstructor()
    if(loading&&isInstructorLoading){
      return <div><span className="loading loading-ring loading-xs"></span>
      <span className="loading loading-ring loading-sm"></span>
      <span className="loading loading-ring loading-md"></span>
      <span className="loading loading-ring loading-lg"></span></div>
    }
    if(user&&isInstructor){
      return children
    }
    return <Navigate to="/"/>
}

export default InstructorRoutes