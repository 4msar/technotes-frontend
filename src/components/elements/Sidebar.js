import React from 'react';
import NoteList from './NoteList';

function Sidebar() {
    return (
        <section className="col sidebar">
            <section className="sidebar-header">
                <h4>Tech Notes</h4>
                <button type="button" className="edit-button edit-button--solid" role="menuitem">
                    New
                </button>
            </section>
            <NoteList />
        </section>
    );
}

export default Sidebar;
