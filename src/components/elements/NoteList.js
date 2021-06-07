function NoteList() {
    return (
        <nav>
            <ul className="notes-list">
                <li>
                    <div className="sidebar-note-list-item">
                        <header className="sidebar-note-header">
                            <strong>Long Note</strong>
                            <small>8:45 PM</small>
                        </header>
                        <button
                            type="button"
                            className="sidebar-note-open"
                            style={{ border: '1px solid transparent' }}
                        >
                            Open note for preview
                        </button>
                        <button type="button" className="sidebar-note-toggle-expand">
                            <Chevron />
                        </button>
                    </div>
                </li>
                <li>
                    <div className="sidebar-note-list-item">
                        <header className="sidebar-note-header">
                            <strong>New Note</strong>
                            <small>12/22/20</small>
                        </header>
                        <button
                            type="button"
                            style={{
                                border: '1px solid var(--primary-border)',
                                backgroundColor: 'var(--tertiary-blue)',
                            }}
                            className="sidebar-note-open"
                        >
                            Open note for preview
                        </button>
                        <button type="button" className="sidebar-note-toggle-expand">
                            <Chevron />
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

const Chevron = () => (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.5 0.75L5 5.25L0.5 0.75"
            stroke="#8A8D91"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default NoteList;
