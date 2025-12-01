import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="white" data-bs-theme="white">
        <Container>
            <div >
            <Link to = '/home'> <img style={{height : 100 , width:100 , marginLeft:'-100px' }} src='H & M.png' alt = ''></img></Link>  
            </div>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav style={{marginLeft:'50px'}} className="me-auto">
          <Nav.Link href="ladies">LADIES</Nav.Link>
          <Nav.Link href="men">MEN</Nav.Link>
          <Nav.Link href="kids">KIDS</Nav.Link>
          <Nav.Link href="household">HOUSEHOLDS</Nav.Link>
          <Nav.Link href="beauty">BEAUTY</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;