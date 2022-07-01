import React from 'react';
import {GoogleLogout} from "react-google-login";
import {useNavigate} from "react-router-dom";
import {Nav} from "react-bootstrap";


const Navbar = () => {
    let navigate = useNavigate();

    function logout() {
        sessionStorage.setItem("Login_State", "false");
        navigate("/login");
    }

    function toDashboard() {
        return navigate("/dashboard");
    }

    return(


                        <GoogleLogout
                            clientId="313776688219-aom4pa92gqmhcmsubgp1thin4f3b392m.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={logout}
                        />

    );
}

export default Navbar;