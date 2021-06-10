import React, { createContext, useEffect, useState } from 'react';
import { getAuthToken, removeAuthToken } from '../helpers/utils';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(getAuthToken());
    }, []);

    const logOut = () => {
        setUser(null);
        removeAuthToken();
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loggedIn: Boolean(user),
                logOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;
