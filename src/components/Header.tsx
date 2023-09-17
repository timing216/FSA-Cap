import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "../App.css";
import { Product } from "./Home";

interface HeaderProps {
  isLoggedIn: boolean;
  cart: {
    items: Product[];
    total: number;
  };
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, cart, onSearch }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const location = useLocation();

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
            {location.pathname !== "/cart" &&
              location.pathname !== "/checkout" && (
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Button
                    className="searchButton"
                    variant="outline-info me-5"
                    onClick={() => onSearch(inputValue)}
                  >
                    Search
                  </Button>
                </Form>
              )}
          </Nav>

          {/* <div>
            Items in Cart: {cart.items.length}
            <br />
            Total Price: ${cart.total}
          </div> */}
          <Nav>
            {!isLoggedIn && (
              <>
                <Nav.Link href="/register" className="register">
                  Register
                </Nav.Link>
                <Nav.Link href="/login" className="login">
                  Login
                </Nav.Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/cart" className="me-5">
                  <div className="cartWrapper">
                    <i className="bi bi-cart cartIcon"></i>
                    <span className="cartDetails">
                      Items: {cart.items.length} | Total: $
                      {parseFloat(cart.total.toFixed(2))}
                    </span>
                  </div>
                </Nav.Link>

                <Nav.Link href="/logout" className="logout">
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
