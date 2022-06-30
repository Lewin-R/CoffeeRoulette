import * as React from 'react';
import {GoogleLogin} from "react-google-login";
import {Navigate, NavigateFunction, useNavigate} from "react-router-dom";



//Google SSO
const clientID = "313776688219-aom4pa92gqmhcmsubgp1thin4f3b392m.apps.googleusercontent.com";
//Airtable api
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keywYCUyR9kqDZFEQ'
});
const base = Airtable.base('appu6bIZxhUt7Bwng');

const Login = () => {
    let navigate = useNavigate();

    const onSuccess = (res: any) => {
        sessionStorage.setItem('Login-State', String(true));
        console.log('[Login Success] currentUser: ', res.profileObj);
        return navigate("/dashboard");
    };

    const onFailure = (res: { profileObj: any; }) => {
        sessionStorage.setItem('Login_State', String(false))
        console.log('[Login failure] res: ', res);
    };

    return (
        <div className={"flex-box align-items-center justify-content-center , centered-div"}>
            <div className={"text-center"}>
                <h1>Coffee Roulette</h1>
                <img className={"img-logo"} src="../logoCoffeeRoulette.svg" alt="Logo Coffee Roulette"/>
                <div className={"mt-xl-5"}>
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
        let id_token = profile.getAuthResponse().id_token;
        let name = profile.getName();
        let img_url = profile.getImageUrl();
        let email = profile.getEmail();

    }
}
export default Login;