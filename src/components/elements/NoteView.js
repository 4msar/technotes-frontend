function NoteView() {
    return (
        <section className="col note-viewer">
            <div className="note">
                <div className="note-header">
                    <h1 className="note-title">New Note</h1>
                    <div className="note-menu" role="menubar">
                        <small className="note-updated-at" role="status">
                            Last updated on 22 Dec 2020 at 4:47 PM
                        </small>
                        <button
                            type="button"
                            className="edit-button edit-button--outline"
                            role="menuitem"
                        >
                            Edit
                        </button>
                    </div>
                </div>
                <div className="note-preview">
                    <div className="text-with-markdown">
                        <h1>Welcome Note</h1>
                        <p>
                            This is a new note, Here we go!
                            <br />
                            Let&apos;s do something more.
                        </p>
                        <blockquote>
                            <p>Thanks</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NoteView;
