import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavMenu() {

  return (
    <Navbar variant="dark" expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand as={Link} to="#home">Particles</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="#home">FireWorks</Nav.Link>
            <Nav.Link as={Link} to="/click-particles">ClickParticles</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>    
  );
};