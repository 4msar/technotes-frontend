import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppContainer({ children, ...props }) {
    return (
        <div className="App">
            <Navbar className="navigation-bar" bg="dark" sticky="top" variant="dark">
                <Navbar.Brand href="/">TechNotes</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/shared">
                        Shared Notes
                    </Nav.Link>
                </Nav>
            </Navbar>
            <main {...props}>{children}</main>
        </div>
    );
}

export default AppContainer;
