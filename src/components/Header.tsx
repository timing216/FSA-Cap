import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import "/src/App.css";

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="AmasonLogo">
          AMASON Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button className="searchButton" variant="outline-info">
                Search
              </Button>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="#register" className="register">
              Register
            </Nav.Link>
            <Nav.Link href="#login" className="login">
              Login
            </Nav.Link>
            <Nav.Link href="#logout" className="logout">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
