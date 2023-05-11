import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React, { createContext } from 'react';
import app from "../Firebase/Firebase.init";
export const authContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const continueWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }


    const authInfo = {continueWithGoogle, continueWithGithub};
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;