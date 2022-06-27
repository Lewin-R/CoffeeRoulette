import * as React from 'react';
import {GoogleLogin} from "react-google-login";
/*import logo from "../logoCoffeeRoulette.svg";*/

//Google SSO
const clientID = "313776688219-aom4pa92gqmhcmsubgp1thin4f3b392m.apps.googleusercontent.com";
//Airtable api
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keywYCUyR9kqDZFEQ'
});
var base = Airtable.base('appu6bIZxhUt7Bwng');
base.Users("tbl7JZwbnR8pYhvC4");

const Login = () => {
    const onSuccess = (res: any) =>{
        console.log('[Login Success] currentUser: ', res.profileObj);
        console.log(onSignIn(res.profileObj));

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
        let id_token = profile.getAuthResponse().id_token;
        let name = profile.getName();
        let img_url = profile.getImageUrl();
        let email = profile.getEmail();



        /*var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://yourbackend.example.com/tokensignin');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            console.log('Signed in as: ' + xhr.responseText);
        };
        xhr.send('idtoken=' + id_token);*/
    }
}
export default Login;