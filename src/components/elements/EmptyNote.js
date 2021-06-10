import React from 'react';
import { Button } from 'react-bootstrap';

function EmptyNote({ toggleSidebar }) {
    return (
        <section className="col note-viewer">
            <div className="note-empty">
                <span className="note-empty-text">Click a note on the left to view note!</span>
                <Button className="empty-list" onClick={toggleSidebar} variant="info" size="sm">
                    View All
                </Button>
            </div>
        </section>
    );
}

export default EmptyNote;
