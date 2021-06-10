import { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import SharedItem from '../components/elements/SharedItem';
import SharedItemDetails from '../components/elements/SharedItemDetails';
import AppContainer from '../components/layouts/AppContainer';
import ApiService from '../helpers/ApiService';

function SharedNotes() {
    const [loading, toggleLoading] = useState(false);
    const [modal, showModal] = useState(null);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        toggleLoading(true);
        ApiService.getSharedNotes()
            .then((response) => {
                setNotes(response.models);
            })
            .finally(() => toggleLoading(false));
    }, []);

    return (
        <AppContainer>
            <div className="main shared-page">
                <div className="shared-items">
                    <h3>Shared Notes</h3>
                </div>
                {loading && <Spinner animation="border" />}
                {!loading && (
                    <Container>
                        <Row>
                            {notes.map((item) => (
                                <Col lg={3} md={4} sm={6} xs={12} key={item.id}>
                                    <SharedItem onView={() => showModal(item)} item={item} />
                                </Col>
                            ))}
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

export default SharedNotes;
