import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { app } from '../firebase/firebase.config';

export const AuthContex = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);


    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createNewUser = (email, password, userName) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const UserLogout = () => {
        return signOut(auth)
            .then(() => {
                console.log("Logout Successfuly");
            }).catch(e => console.error(e))
    }

    const UpdateUserProfile = (displayname, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayname,
            photoURL: photoURL
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, curerntUser => {
            setUser(curerntUser);
            setLoading(false);
            console.log("unSubscribe");
        });

        return () => {
            return unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        googleSignIn,
        createNewUser,
        LoginUser,
        UserLogout,
        UpdateUserProfile
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;