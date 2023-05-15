import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../Firebase/Firebase.init";
export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signUpWithEmailAndPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginWithEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const resetPass = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const continueWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }
    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
            if (user) {
                fetch('https://car-doctor-server-ten-xi.vercel.app/user-token', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ user: user.email })
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('access-token', data.token);
                    })
            }
            else {
                localStorage.removeItem('access-token');
            }
        })
        return () => unsubscribe();
    }, []);

    const authInfo = { user, loading, continueWithGoogle, continueWithGithub, signUpWithEmailAndPass, loginWithEmailAndPass, resetPass, logout };
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;