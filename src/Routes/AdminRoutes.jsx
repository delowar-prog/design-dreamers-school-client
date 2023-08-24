import React from 'react'
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoutes = ({children}) => {
  const { user, loading } = useAuth()
  const [isAdmin, isAdminLoading]=useAdmin()
  if (loading || isAdminLoading) {
    return <span>
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
    </span>
  }
  const location = useLocation();
  if (user && isAdmin) {
    return children
  }
  return <Navigate to="/" state={{ from: location }} replace />
}

export default AdminRoutes