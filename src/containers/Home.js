import { useState } from 'react';
import CreateNote from '../components/elements/CreateNote';
import EmptyNote from '../components/elements/EmptyNote';
import NoteView from '../components/elements/NoteView';
import Sidebar from '../components/elements/Sidebar';
import AppContainer from '../components/layouts/AppContainer';
import { useNotes } from '../store';

function Home() {
    const [openSidebar, showSidebar] = useState();
    const [createNew, setCreateNew] = useState(false);
    const [active, setActive] = useState(null);
    const { notes } = useNotes();

    const handleNewButtonClick = () => {
        setCreateNew(!createNew);
        setActive(null);
        showSidebar(false);
    };

    const handleOnNewNoteAdd = (note) => {
        setCreateNew(!createNew);
        setActive(note.id);
    };

    const handleOnActive = (item) => {
        setActive(item);
        showSidebar(false);
    };

    const note = notes?.find((item) => item.id === active);

    return (
        <AppContainer>
            <div className="main">
                <Sidebar
                    active={active}
                    onActive={handleOnActive}
                    openSidebar={openSidebar}
                    onNew={handleNewButtonClick}
                    items={notes}
                />
                {createNew && <CreateNote onAdd={handleOnNewNoteAdd} />}
                {!createNew && note && (
                    <NoteView note={note} toggleSidebar={() => showSidebar(!openSidebar)} />
                )}
                {!createNew && !note && (
                    <EmptyNote toggleSidebar={() => showSidebar(!openSidebar)} />
                )}
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                {(!createNew && !note) ||
                    (openSidebar && (
                        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                        <div
                            onClick={() => showSidebar(!openSidebar)}
                            className="overlay-sidebar"
                        />
                    ))}
            </div>
        </AppContainer>
    );
}

export default Home;
