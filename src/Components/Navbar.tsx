import React from 'react';
import {GoogleLogout} from "react-google-login";
import {useNavigate} from "react-router-dom";


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
        <nav className=" navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li>
                        <GoogleLogout
                            clientId="313776688219-aom4pa92gqmhcmsubgp1thin4f3b392m.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={logout}
                        />
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;