/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button } from 'react-bootstrap';

function NoteEditor({ onSubmit, title, details, onChange, disabled = false }) {
    return (
        <form className="note-editor-form" autoComplete="off" onSubmit={onSubmit}>
            <div className="title-input">
                <label className="title-label" htmlFor="note-title-input">
                    <span>Enter a title for your note</span>
                    <Button
                        disabled={disabled}
                        className="note-button"
                        type="submit"
                        variant="primary"
                    >
                        Save
                    </Button>
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
