import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth()
  if (loading) {
    return <span>
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
    </span>
  }
  const location = useLocation();
  if (user) {
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivateRoutes