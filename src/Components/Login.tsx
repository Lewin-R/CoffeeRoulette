import * as React from 'react';
import {GSSO} from "./SSO";


const Login = () => {
    return (
        <div className={"flex-box align-items-center justify-content-center , centered-div"}>
            <div className={"text-center"}>
                <h1>Coffee Roulette</h1>
                <img className={"img-logo"} src="../logoCoffeeRoulette.svg" alt="Logo Coffee Roulette"/>
                <div className={"mt-xl-5"}>
                    <h2>Login</h2>
                    {GSSO()}
                </div>
            </div>
        </div>
    );
}
export default Login;