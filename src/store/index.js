import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { NoteContext } from './NoteProvider';

export { default as AuthProvider } from './AuthProvider';
export { default as NoteProvider } from './NoteProvider';

export const useAuth = () => useContext(AuthContext);
export const useNotes = () => useContext(NoteContext);
