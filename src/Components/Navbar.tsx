import React from 'react';
import {GoogleLogout} from "react-google-login";
import {Link, Route, useNavigate} from "react-router-dom";
import {Nav} from "react-bootstrap";
import Dashboard from "./Dashboard";


const Navbar = () => {
    let navigate = useNavigate();

    function logout() {
        sessionStorage.setItem("Login-State", "false");
        navigate("/login");
    }

    function navClasses(current:string){
        if(window.location.pathname === current){
            return "nav-item nav-link active";
        }
        else {
            return "nav-item nav-link" ;
        }

    }

    return(

        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <a href="/dashboard"></a>
                <img src="../logoCoffeeRoulette.png" alt=""/>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className={navClasses("/dashboard")} to="/dashboard">Dashboard</Link>
                        <Link className={navClasses("/adminView")} to="/adminView">Admin View</Link>
                        <Link className={navClasses("/account")} to="/account">Account</Link>
                        <GoogleLogout
                            clientId="313776688219-aom4pa92gqmhcmsubgp1thin4f3b392m.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={logout}/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;