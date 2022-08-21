import React, { useReducer } from 'react'

import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

export const AuthProvider = ({ children }) => {

    const initialState = {
        logged: localStorage.getItem('logged') ? localStorage.getItem('logged') : false
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}
