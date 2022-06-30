import React from 'react';
import ProtectedRoute from "./Components/PrivateRouting";
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import NotFound from "./Components/NotFound";
import './App.css';
sessionStorage.setItem('Login_State', String(false));

const App = () => {
    return (
        <>
            <div className={"App"}>
                <Routes>
                    <Route path="/" element={<Navigate to="/login"/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/dashboard" element={
                        <ProtectedRoute state={sessionStorage.getItem('Login-State')}>
                            <Dashboard/>
                        </ProtectedRoute>
                    }/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </>
    );
}


export default App;

