import { Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { HomePage } from "../pages/logged/HomePage";
import { LoginPage } from "../pages/login/LoginPage";

export const AppRouter = () => {
    
    return (
        <Routes>
            <Route path="login" element={
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
            } />

            <Route path="/" element={
                <PrivateRoute>
                    <HomePage />
                </PrivateRoute>
            } />
        </Routes>
    );
};
