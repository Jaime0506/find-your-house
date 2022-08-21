import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'

export const PublicRoute = ({ children }) => {
    const { state: { logged } } = useContext(AuthContext)

    console.log(logged)

    return (logged) ? <Navigate to='/' /> : children
  
}
