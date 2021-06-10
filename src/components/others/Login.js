import { useState } from 'react';
import { Button, Form, Modal, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ApiService from '../../helpers/ApiService';
import { setAuthToken } from '../../helpers/utils';
import { useAuth } from '../../store';

function Login({ show, onClose }) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [loading, toggleLoading] = useState(false);
    const history = useHistory();
    const { setUser } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null);
        toggleLoading(true);
        ApiService.login(email)
            .then((response) => {
                setAuthToken(response.jwt);
                setUser(response.jwt);
                history.push('/home');
            })
            .catch(() => {
                setError('Authentication failed, try again!');
                console.log('There was an error');
            })
            .finally(() => toggleLoading(false));
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
                    <Button disabled={loading} variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button disabled={loading} variant="primary" type="submit">
                        Submit {loading && <Spinner animation="border" size="sm" />}
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
}

export default Login;
