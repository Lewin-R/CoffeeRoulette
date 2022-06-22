import * as React from 'react';
import {GoogleLogin} from "react-google-login";
import logo from "../logoCoffeeRoulette.svg";
import Button from "react-bootstrap/Button"

const clientID = "231963202217-njj9ka9ivkh29p9k1bmmjojcpi171ing.apps.googleusercontent.com";

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
                <img className={"img-logo"} src={logo} alt="Logo Coffee Roulette" />
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
                <Button size="lg" type="submit">

                    Login

                </Button>
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