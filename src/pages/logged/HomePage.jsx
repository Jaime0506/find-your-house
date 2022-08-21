import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../auth/context/AuthContext'

export const HomePage = () => {

    const { state } = useContext(AuthContext)

    useEffect(() => {
        console.log(state)
    }, [])

    return (
        <div>HomePage</div>
    )
}
