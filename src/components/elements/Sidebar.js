import React from 'react';
import { Button } from 'react-bootstrap';
import NoteList from './NoteList';

function Sidebar({ title = 'My Notes', onNew, openSidebar, ...props }) {
    return (
        <section className={['sidebar', openSidebar && 'open'].join(' ')}>
            <section className="sidebar-header">
                <h4>{title}</h4>
                <Button onClick={onNew} className="note-button" size="sm" variant="primary">
                    New
                </Button>
            </section>
            <NoteList {...props} />
        </section>
    );
}

export default Sidebar;
