import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {
   const { user } = useContext(AuthContext)
   const location = useLocation()

   return user && user.uid ? children : <Navigate to='/login' state={{ from: location.pathname }} replace={true} />
}

export default ProtectedRoute
