/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button } from 'react-bootstrap';

function NoteEditor({ onSubmit, onCancel, title, details, onChange, disabled = false }) {
    return (
        <form className="note-editor-form" autoComplete="off" onSubmit={onSubmit}>
            <div className="title-input">
                <label className="title-label" htmlFor="note-title-input">
                    <span>Enter a title for your note</span>
                    <div className="d-flex">
                        <Button
                            disabled={disabled}
                            className="note-button"
                            type="submit"
                            variant="primary"
                        >
                            Save
                        </Button>
                        {onCancel && (
                            <Button
                                onClick={onCancel}
                                className="note-button ml-1"
                                type="button"
                                variant="danger"
                            >
                                Cancel
                            </Button>
                        )}
                    </div>
                </label>
                <input
                    id="note-title-input"
                    type="text"
                    name="title"
                    value={title}
                    onChange={onChange}
                    required
                />
            </div>
            <div className="content-input">
                <label className="offscreen" htmlFor="note-body-input">
                    Enter the body for your note
                </label>
                <textarea
                    id="note-body-input"
                    name="details"
                    value={details}
                    onChange={onChange}
                    required
                />
            </div>
        </form>
    );
}

export default NoteEditor;
