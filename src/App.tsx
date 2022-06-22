import * as React from 'react';
import logo from './logoCoffeeRoulette.svg';
import './App.css';
import {NavLink} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import {useState} from "react";
import {GoogleLogin} from "react-google-login";

const App = () => (
    <div className='app'>
        <Login/>
    </div>
);

const clientID = "231963202217-njj9ka9ivkh29p9k1bmmjojcpi171ing.apps.googleusercontent.com";

function Login() {
    const onSuccess = (res: any) =>{
        console.log('[Login Success] currentUser: ', res.profileObj);
    };
    const onFailure = (res: { profileObj: any; }) =>{
        console.log('[Login failure] res: ', res);
    };

    return (
        <div className="flex-box align-items-center justify-content-center">
            <div className="text-center">
                <img className={"img-logo"} src={logo} alt="Logo Coffee Roulette" />
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
    );

    function onSignIn(googleUser: { getBasicProfile: () => any; }) {
        let profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
}

export default App;

