import React, { createContext, useEffect, useState } from 'react';
import { getAuthToken } from '../helpers/utils';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, toggleLoading] = useState(true);

    useEffect(() => {
        setUser(getAuthToken());
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loggedIn: Boolean(user),
                loading,
                toggleLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;
