import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase/firebase.config';

export const AuthContex = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const createNewUser = (email, password, userName) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const UserLogout = () => {
        return signOut(auth)
            .then(() => {
                console.log("Logout Successfuly");
            }).catch(e => console.error(e))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, curerntUser => {
            setUser(curerntUser);
            console.log("unSubscribe");
        });

        return () => {
            return unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        googleSignIn,
        createNewUser,
        LoginUser,
        UserLogout
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;