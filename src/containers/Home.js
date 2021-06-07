import AppContainer from '../components/layouts/AppContainer';
import EmptyNote from '../components/elements/EmptyNote';
import NoteView from '../components/elements/NoteView';
import Sidebar from '../components/elements/Sidebar';

function Home() {
    return (
        <AppContainer>
            <div className="main">
                <Sidebar />
                <NoteView />
                {false && <EmptyNote />}
            </div>
        </AppContainer>
    );
}

export default Home;
