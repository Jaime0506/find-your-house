import React from 'react'
import { useForm } from '../../hooks/useForm'

export const LoginForm = ({ onLogin }) => {
    
    const { formValue, onChangeForm } = useForm()

    const onSubmit = (e) => {
        e.preventDefault()

        if (Object.entries(formValue).length <= 1) return console.log('no tiene valor') 

        onLogin(formValue)
    }

    return (
        <form onSubmit={ onSubmit }>
            <label htmlFor="">Nombre de usuario</label>
            <input type="text" name='user' onChange={onChangeForm} />

            <label htmlFor="">Contraseña</label>
            <input type="text" name='password' onChange={onChangeForm} />

            <button>Iniciar Sesion</button>
        </form>
    )
}
