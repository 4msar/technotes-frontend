import { forwardRef } from 'react';
import { Card, Dropdown } from 'react-bootstrap';

const CustomToggle = forwardRef(({ onClick }, ref) => (
    <a
        href="##"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        <svg height={24} width={15} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
    </a>
));

function SharedItem({ item, onView }) {
    const text = `${item.note.details}`.split(' ');
    return (
        <Card className="mb-2 shared-item">
            <Card.Header>
                <h6>{item.note.title}</h6>
                <Dropdown alignRight>
                    <Dropdown.Toggle as={CustomToggle} id={`dropdown-menu-${item.id}`} />

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={onView} eventKey="1">
                            View Details
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {text.slice(0, 20).join(' ')}
                    {text.length > 20 ? '...' : ''}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SharedItem;
