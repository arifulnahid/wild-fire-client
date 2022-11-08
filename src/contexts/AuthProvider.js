import React, { createContext } from 'react';

const AuthContex = createContext();

const AuthProvider = ({ children }) => {

    const authInfo = {}

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;