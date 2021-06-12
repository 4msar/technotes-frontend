import { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { isEmpty } from '../helpers/utils';
import SharedItemDetails from '../components/elements/SharedItemDetails';
import AppContainer from '../components/layouts/AppContainer';
import ApiService from '../helpers/ApiService';

function SharedUsers() {
    const [loading, toggleLoading] = useState(false);
    const [modal, showModal] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        toggleLoading(true);
        ApiService.notesSharedByMe()
            .then((response) => {
                setUsers(response.models);
            })
            .finally(() => toggleLoading(false));
    }, []);

    return (
        <AppContainer>
            <div className="main shared-page">
                <div className="shared-items">
                    <h3>Shared By Me</h3>
                </div>
                {loading && <Spinner animation="border" />}
                {!loading && (
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={10} sm={10} xs={12}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>User Info</th>
                                            <th>Total Notes Shared</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((item, index) => (
                                            <tr key={item.user.id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    {isEmpty(item.user.first_name)
                                                        ? item.user.mail
                                                        : `${item.user.first_name} {item.user.last_name}`}
                                                </td>
                                                <td>{item.notes_shared}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                )}
            </div>
            <SharedItemDetails
                show={Boolean(modal)}
                item={modal}
                handleClose={() => showModal(null)}
            />
        </AppContainer>
    );
}

export default SharedUsers;
