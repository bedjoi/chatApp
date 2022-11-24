import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer } from 'react-router-bootstrap';
import logo from "../assets/imgs/01.png"



function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/">
              <img src={logo} id="monLogo" alt='' />
            </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link >Home</Nav.Link>
            </LinkContainer>

              <LinkContainer to="/chat">
            <Nav.Link >Messages</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contacts">
                <Nav.Link >Contact</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/groups">
            <Nav.Link >Groupes</Nav.Link>
            </LinkContainer>
            

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <div className="logOut">
            <LinkContainer to="/login">
            <Button variant="outline-success logOut">logOut</Button>
            </LinkContainer>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;