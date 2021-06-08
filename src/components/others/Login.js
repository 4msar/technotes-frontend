import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ApiService from '../../helpers/ApiService';
import { setAuthToken } from '../../helpers/utils';

function Login({ show, onClose }) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null);
        ApiService.login(email)
            .then((response) => {
                setAuthToken(response.jwt);
                history.push('/home');
            })
            .catch(() => {
                setError('Authentication failed, try again!');
                console.log('There was an error');
            });
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Form.Group>
                    {error && <strong className="text-danger">{error}</strong>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
}

export default Login;
