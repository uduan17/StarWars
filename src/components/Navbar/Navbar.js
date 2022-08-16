import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Star_Wars  from '../Imagen/Star_Wars.jpg';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container >
        <Navbar.Brand href={Star_Wars}></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"className='text-light'>Inicio</Nav.Link>
            <Nav.Link href="#pricing" className='text-light'>Personajes</Nav.Link>
            <Nav.Link href="#pricing" className='text-light'>Planetas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;