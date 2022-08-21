import React, { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";
import { types } from "../../auth/types/types";
import { LoginForm } from "../../components/LoginPage/LoginForm";

export const LoginPage = () => {

    const { dispatch } = useContext(AuthContext)

    const setLogin = (userData) => {
        dispatch({
            type: types.login,
            payload: userData
        })
    }

    return (
        <div>
            <h1>Empieza ahora y encuentra tu hogar, en un instante</h1>
            <LoginForm onLogin={setLogin} />
        </div>
    );
};