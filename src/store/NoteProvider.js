import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import ApiService from '../helpers/ApiService';
import { AuthContext } from './AuthProvider';

export const NoteContext = createContext();

function AuthProvider({ children }) {
    const [notes, setNotes] = useState([]);
    const [loading, toggleLoading] = useState(true);
    const { loggedIn } = useContext(AuthContext);

    const fetchNotes = useCallback(() => {
        toggleLoading(true);
        ApiService.getNotes()
            .then((response) => {
                setNotes(response.notes);
            })
            .finally(() => toggleLoading(false));
    }, []);

    useEffect(() => {
        if (loggedIn) {
            fetchNotes();
        }
    }, [loggedIn, fetchNotes]);

    return (
        <NoteContext.Provider
            value={{
                notes,
                setNotes,
                fetchNotes,
                loading,
            }}
        >
            {children}
        </NoteContext.Provider>
    );
}
export default AuthProvider;
