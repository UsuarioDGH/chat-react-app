import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import logo from "../img/logo.png"
import { auth } from "../services/firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    return(
        <main className="welcome">
            <h2>Welcome to React Chat and Firebase</h2>
            <img 
                src={logo}
                alt="ReactJs logo" with={50} height={50}
            />
            <p>Sign in with Google to chat with your follow React Developers. </p>
            <button className="sign-in">
                <img
                    onClick={googleSignIn}
                    src={GoogleSignin}
                    alt="sign in with google"
                    type="button"
                 />
            </button>
        </main>
    );
};

export default Welcome;