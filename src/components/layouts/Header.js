import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../store';

function Header() {
    const { loggedIn, logOut } = useAuth();
    return (
        <Navbar className="navigation-bar" bg="dark" sticky="top" variant="dark">
            <Navbar.Brand href="/">TechNotes</Navbar.Brand>
            {loggedIn && <NavMenu logOut={logOut} />}
        </Navbar>
    );
}

const NavMenu = ({ logOut }) => {
    const history = useHistory();
    const handleLogout = () => {
        logOut();
        history.push('/');
    };
    return (
        <Nav className="ml-auto">
            <NavDropdown drop="down" alignRight title="Home" id="menu">
                <NavDropdown.Item as={Link} to="/home">
                    Home
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shared">
                    Shared Notes
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout} className="cursor-pointer" as="span">
                    Logout
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
};

export default Header;
