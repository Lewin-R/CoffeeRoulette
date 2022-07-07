import * as React from 'react';
import Navbar from "./Navbar";
import {retGSSOUser} from "./SSO";

const Account = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex-box align-items-center justify-content-center">
                <div className="centered-div float-container">
                    <div className="float-child">
                        <label htmlFor="">Aktueller Nutzer</label>
                        <br/>
                        {retGSSOUser()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
