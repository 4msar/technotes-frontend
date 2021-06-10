import { Button, Modal } from 'react-bootstrap';
import { formatDate } from '../../helpers/utils';

function SharedItemDetails({ show, item, handleClose }) {
    if (!item) {
        return null;
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>View Shared Note Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>
                    Note Shared to:{' '}
                    <a href={`mailto:${item.target_user.mail}`}>
                        <i>{item.target_user.mail}</i>
                    </a>
                </h5>
                <p>
                    <i>Shared On: </i>
                    <strong>{formatDate(item.created, 'dd MMM, yyyy - hh:mm AA')}</strong>
                </p>
                <hr />
                <h4>{item.note.title}</h4>
                <div className="note-preview">{item.note.details}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SharedItemDetails;
