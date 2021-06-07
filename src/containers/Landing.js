import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import AppContainer from '../components/layouts/AppContainer';

function Landing() {
    return (
        <AppContainer>
            <div className="center-item">
                <div className="text-center">
                    <h1>Login to view your Notes</h1>
                    <Button as={Link} type="primary" to="/home">
                        Go
                    </Button>
                </div>
            </div>
        </AppContainer>
    );
}

export default Landing;
