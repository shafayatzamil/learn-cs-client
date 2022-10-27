import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

//protected route
const ProtectedRoute = ({ children }) => {
   const { user } = useContext(AuthContext)
   const location = useLocation()

   // if (user && user.uid) {
   //    return children
   // }

   return user && user.uid ? children :<Navigate to='/login' state={{ from: location.pathname }} replace />
}

export default ProtectedRoute