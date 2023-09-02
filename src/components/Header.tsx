import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "../App.css";

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container style={{ paddingBottom: "0px" }} className="headerContainer">
        <Navbar.Brand as={Link} to="/">
          <img
            alt="AMASON Shop"
            src="./src/assets/Amason_logo.svg"
            width="300"
            height="300"
            className="AmasonLogo"
          />
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
              <Button className="searchButton" variant="outline-info me-5">
                Search
              </Button>
              <Nav.Link as={Link} to="/cart" className="me-4">
                <i className="bi bi-cart cartIcon"></i>
              </Nav.Link>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="/register" className="register">
              Register
            </Nav.Link>
            <Nav.Link href="/login" className="login">
              Login
            </Nav.Link>
            <Nav.Link href="/logout" className="logout">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
