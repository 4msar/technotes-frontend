import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import AppContainer from '../components/layouts/AppContainer';
import Login from '../components/others/Login';
import { useAuth } from '../store';

function Landing({ history }) {
    const [open, toggleOpen] = useState(false);
    const { loggedIn } = useAuth();

    useEffect(() => {
        if (loggedIn) {
            history.push('/home');
        }
    }, [history, loggedIn]);

    return (
        <AppContainer>
            <div className="center-item">
                <div className="text-center">
                    <h1>Login to view your Notes</h1>
                    <br />
                    <Button onClick={() => toggleOpen(true)} type="primary" to="/home">
                        Login
                    </Button>
                </div>
            </div>
            <Login show={open} onClose={() => toggleOpen(false)} />
        </AppContainer>
    );
}

export default Landing;
