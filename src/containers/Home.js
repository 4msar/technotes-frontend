import { useState } from 'react';
import AppContainer from '../components/layouts/AppContainer';
import EmptyNote from '../components/elements/EmptyNote';
import NoteView from '../components/elements/NoteView';
import Sidebar from '../components/elements/Sidebar';

function Home() {
    const [openSidebar, showSidebar] = useState();
    return (
        <AppContainer>
            <div className="main">
                <Sidebar openSidebar={openSidebar} />
                <NoteView toggleSidebar={() => showSidebar(!openSidebar)} />
                {false && <EmptyNote />}
            </div>
        </AppContainer>
    );
}

export default Home;
