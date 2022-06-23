import * as React from 'react';
import {GoogleLogin} from "react-google-login";
/*import logo from "../logoCoffeeRoulette.svg";*/

//With google accout D dint want to use, but it is the only working,???
const clientID = "313776688219-aom4pa92gqmhcmsubgp1thin4f3b392m.apps.googleusercontent.com";

const Login = () => {
    const onSuccess = (res: any) =>{
        console.log('[Login Success] currentUser: ', res.profileObj);
    };
    const onFailure = (res: { profileObj: any; }) =>{
        console.log('[Login failure] res: ', res);
    };

    return (
        <div className="flex-box align-items-center justify-content-center">
            <div className="text-center">
                <h1>Coffee Roulette</h1>
                <img className={"img-logo"} src="../logoCoffeeRoulette.svg" alt="Logo Coffee Roulette" />
                <div className="mt-xl-5">
                    <h2>Login</h2>
                    <GoogleLogin
                        clientId={clientID}
                        buttonText="Login"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        style={{marginTop: "100px"}}
                        isSignedIn={true}
                    />
                </div>
            </div>
        </div>
    );

    function onSignIn(googleUser: { getBasicProfile: () => any; }) {
        let profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
}
export default Login;