import React from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import {GoogleLogout} from "react-google-login";


const Dashboard = () => {
    let navigate = useNavigate();
    function logout() {
        sessionStorage.setItem("Login_State", "false");
        navigate("/login");
    }
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <GoogleLogout
                            clientId="313776688219-aom4pa92gqmhcmsubgp1thin4f3b392m.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={logout}
                        />
                    </li>
                </ul>
            </nav>
        );
}

export default Dashboard;