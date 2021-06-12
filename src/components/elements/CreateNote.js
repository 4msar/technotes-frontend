import { useState } from 'react';
import ApiService from '../../helpers/ApiService';
import { useNotes } from '../../store';
import NoteEditor from './NoteEditor';

function CreateNote({ onAdd, onCancel }) {
    const [title, setTitle] = useState('Untitled');
    const [disabled, toggleDisabled] = useState(true);
    const [details, setDetails] = useState('');
    const { setNotes } = useNotes();

    const handleSave = (event) => {
        event.preventDefault();
        const payload = { title, details };
        toggleDisabled(true);
        ApiService.addNote(payload)
            .then((response) => {
                if (response.id) {
                    setNotes((existing) => [response].concat(existing));
                    onAdd(response);
                } else {
                    // eslint-disable-next-line no-alert
                    alert('Something went wrong, try again!');
                }
            })
            .finally(() => toggleDisabled(false));
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        toggleDisabled(false);
        if (name === 'title') {
            setTitle(value);
        }
        if (name === 'details') {
            setDetails(value);
        }
    };

    return (
        <div className="note-viewer">
            <div className="note-editor">
                <NoteEditor
                    disabled={disabled}
                    title={title}
                    details={details}
                    onCancel={onCancel}
                    onChange={handleChange}
                    onSubmit={handleSave}
                />
            </div>
        </div>
    );
}

export default CreateNote;
