import React, { createContext } from 'react';
import UseFirebase from '../hooks/UseFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const {children}=props;
    return (
        <AuthContext.Provider value={UseFirebase()}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;