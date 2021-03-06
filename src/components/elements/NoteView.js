/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';
import ApiService from '../../helpers/ApiService';
import { formatDate } from '../../helpers/utils';
import EditNote from './EditNote';

function NoteView({ note, toggleSidebar }) {
    const [editing, setEditing] = useState(false);
    const handleUpdate = () => {
        setEditing(false);
    };
    const handleShareButtonClick = () => {
        swal({
            icon: 'info',
            title: 'Share note',
            text: 'Enter a email address to share note!',
            content: 'input',
            buttons: ['Cancel', 'Submit'],
        }).then((email) => {
            if (/^[^\s@]+@[^\s@]+$/.test(email)) {
                ApiService.shareNote({
                    shared_to: email,
                    note_id: note.id,
                })
                    .then((response) => {
                        if (response.model.is_shared) {
                            const name = response.model.target_user.first_name ?? email;
                            swal({
                                icon: 'success',
                                title: 'Success',
                                text: `Note shared with ${name} successfully!`,
                            });
                        }
                        return response;
                    })
                    .catch((error) => {
                        if (error.error) {
                            swal({
                                icon: 'error',
                                title: 'Error',
                                text: error.error ?? 'Something went wrong!',
                            });
                        }
                    });
            }
        });
    };

    useEffect(() => {
        setEditing(false);
    }, [note]);

    return (
        <section className="note-viewer">
            {editing && (
                <EditNote
                    toggleEditing={() => setEditing(!editing)}
                    note={note}
                    onUpdate={handleUpdate}
                />
            )}
            {!editing && (
                <ShowNote
                    note={note}
                    handleShareButtonClick={handleShareButtonClick}
                    toggleEditing={() => setEditing(!editing)}
                    toggleSidebar={toggleSidebar}
                />
            )}
        </section>
    );
}

const ShowNote = ({ note, toggleEditing, toggleSidebar, handleShareButtonClick }) => (
    <div className="note">
        <div className="note-header">
            <h1 className="note-title">{note.title}</h1>
            <div className="note-menu" role="menubar">
                <small className="note-updated-at" role="status">
                    Last Updated {formatDate(note.last_edit ?? note.created, 'dd MMM, yyyy')}
                </small>
                <div className="d-flex">
                    <Button
                        className="note-button toggle-button"
                        size="sm"
                        variant="outline-dark"
                        onClick={toggleSidebar}
                    >
                        All Notes
                    </Button>
                    <Button
                        onClick={toggleEditing}
                        className="note-button"
                        size="sm"
                        variant="primary"
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={handleShareButtonClick}
                        className="note-button ml-1"
                        size="sm"
                        variant="secondary"
                    >
                        Share
                    </Button>
                </div>
            </div>
        </div>
        <div className="note-preview">{note.details}</div>
    </div>
);

export default NoteView;
