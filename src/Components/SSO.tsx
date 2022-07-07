import * as React from 'react';
import {useNavigate} from "react-router-dom";
import {GoogleLogin} from "react-google-login";

//Google SSO
const clientID = "313776688219-aom4pa92gqmhcmsubgp1thin4f3b392m.apps.googleusercontent.com";

let profile: { getAuthResponse: () => { (): any; new(): any; id_token: any; }; getName: () => any; getImageUrl: () => any; getEmail: () => any; };
let id_token: any;
let name: any;
/*let img_url: any;*/
let email: any;

export function GSSO(){
    let navigate = useNavigate();

    const onSuccess = (res: any) => {

        sessionStorage.setItem('Login-State', String(true));
        console.log('[Login Success] currentUser: ', res.profileObj);
        onSignIn(res.profileObj);
        return navigate("/dashboard");
    };

    const onFailure = (res: { profileObj: any; }) => {
        sessionStorage.setItem('Login_State', String(false))
        console.log('[Login failure] res: ', res);
    };
    return(
        <GoogleLogin
            clientId={clientID}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            style={{marginTop: "100px"}}
            isSignedIn={true}
        />
    );
    function onSignIn(googleUser: { getBasicProfile: () => any; }) {
         profile = googleUser.getBasicProfile();
         id_token = profile.getAuthResponse().id_token;
         name = profile.getName();
/*         img_url = profile.getImageUrl();*/
         email = profile.getEmail();

    }
}

export function retGSSOUser(){
    return [profile,id_token,name,/*img_url,*/email];
}

//other SSO's