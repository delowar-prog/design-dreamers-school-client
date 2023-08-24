import React from 'react'
import useAuth from '../hooks/useAuth'
import useInstructor from '../hooks/useInstructor'
import { Navigate, useLocation } from 'react-router-dom'

const InstructorRoutes = ({children}) => {
  const { user, loading } = useAuth()
  const [isInstructor, isInstructorLoading]=useInstructor()
  if (loading || isInstructorLoading) {
    return <span>
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
    </span>
  }
  const location = useLocation();
  if (user && isInstructor) {
    return children
  }
  return <Navigate to="/" state={{ from: location }} replace />
}

export default InstructorRoutes