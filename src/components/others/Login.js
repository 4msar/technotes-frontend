import { useEffect, useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import ApiService from '../../helpers/ApiService';
import { LS_KEY_NAME } from '../../helpers/constant';
import { useAuth } from '../../store';
import AppContainer from '../layouts/AppContainer';

function Login({ show, onClose }) {
    const { loggedIn } = useAuth();
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (loggedIn) {
            console.log('Logged In');
        }
    }, [loggedIn]);

    const handleSubmit = (event) => {
        event.preventDefault();
        ApiService.login(email).then((response) => {
            localStorage.setItem(LS_KEY_NAME, response.jwt);
        });
    };

    return (
        <AppContainer hasFooter={false}>
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </AppContainer>
    );
}

export default Login;
