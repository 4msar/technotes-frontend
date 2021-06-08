import React from 'react';
import { Button } from 'react-bootstrap';
import NoteList from './NoteList';

function Sidebar({ openSidebar }) {
    return (
        <section className={['sidebar', openSidebar && 'open'].join(' ')}>
            <section className="sidebar-header">
                <h4>Tech Notes</h4>
                <Button className="note-button" size="sm" variant="primary">
                    New
                </Button>
            </section>
            <NoteList />
        </section>
    );
}

export default Sidebar;
