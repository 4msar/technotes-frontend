import React from 'react';

function EmptyNote() {
    return (
        <section className="col note-viewer">
            <div className="note--empty-state">
                <span className="note-text--empty-state">
                    Click a note on the left to view something!
                </span>
            </div>
        </section>
    );
}

export default EmptyNote;
