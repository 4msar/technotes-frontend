import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppContainer from '../components/layouts/AppContainer';

function Error404() {
    return (
        <AppContainer>
            <div className="center-item">
                <center>
                    <h2>Not Found</h2>
                    <br />
                    <Button as={Link} to="/">
                        Go Back
                    </Button>
                </center>
            </div>
        </AppContainer>
    );
}

export default Error404;
