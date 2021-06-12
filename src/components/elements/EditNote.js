import { useEffect, useState } from 'react';
import ApiService from '../../helpers/ApiService';
import { useNotes } from '../../store';
import NoteEditor from './NoteEditor';

function EditNote({ note, toggleEditing, onUpdate }) {
    const [item, setItem] = useState({ ...note });
    const [disabled, toggleDisabled] = useState(true);
    const { setNotes } = useNotes();

    useEffect(() => {
        setItem(note);
        const escapeKeyListener = (event) => {
            if (event.keyCode === 27) {
                toggleEditing();
            }
        };
        window.addEventListener('keyup', escapeKeyListener);
        return () => window.removeEventListener('keyup', escapeKeyListener);
    }, [note, toggleEditing]);

    const { title, details } = item;

    const handleChange = (event) => {
        toggleDisabled(false);
        const { name, value } = event.target;
        setItem((existing) => ({ ...existing, [name]: value }));
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        const payload = { title, details };
        toggleDisabled(true);
        ApiService.updateNote(item.id, payload)
            .then((response) => {
                if (response.note) {
                    setNotes((existing) =>
                        existing.map((noteItem) => {
                            if (noteItem.id === item.id) {
                                return { ...noteItem, ...response.note };
                            }
                            return noteItem;
                        })
                    );
                    onUpdate(response);
                } else {
                    // eslint-disable-next-line no-alert
                    alert('Something went wrong, try again!');
                }
            })
            .finally(() => toggleDisabled(false));
    };

    return (
        <div className="note-editor">
            <NoteEditor
                disabled={disabled}
                title={title}
                details={details}
                onCancel={toggleEditing}
                onChange={handleChange}
                onSubmit={handleUpdate}
            />
        </div>
    );
}

export default EditNote;
