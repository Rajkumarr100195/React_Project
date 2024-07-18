
import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button ,Stack } from 'react-bootstrap';

function Header() {

    const options = ['The Godfather', 'Pulp Fiction'];

  return (
<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={haederStyles.head}>
      <Container>
        <Navbar.Brand href="#home">MY TimeSheet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Profile" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
      
        </Navbar.Collapse>


      </Container>
    </Navbar>
  );
}

export default Header;

const haederStyles = {
  head: {
    position: 'sticky',
    top: '0px',
    width:'100%',
    zIndex:'2'
  }
 
};