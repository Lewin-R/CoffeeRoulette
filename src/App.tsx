import React from 'react';
import ProtectedRoute from "./Components/PrivateRouting";
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import NotFound from "./Components/NotFound";
import AdminView from "./Components/AdminView";
import Account from "./Components/Account";
import './App.css';
sessionStorage.setItem('Login_State', String(false));

const App = () => {
    return (
        <>
            <div className={"App"}>
                <Routes>
                    <Route path="/" element={<Navigate to="/login"/>}/>
                    <Route path="/login" element={<Login/>}/>let ;
                    <Route element={<ProtectedRoute state = {sessionStorage.getItem('Login-State')!} redirectPath={"/login"} />}>
                        <Route path="/dashboard" element={<Dashboard/>} />
                        <Route path="/adminView" element={<AdminView />} />
                        <Route path="/account" element={<Account />}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </>
    );
}


export default App;

