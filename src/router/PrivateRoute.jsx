import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'

export const PrivateRoute = ({ children }) => {
    const { state: { logged }} = useContext(AuthContext)

    return (logged) ? children : <Navigate to='login' />
}
