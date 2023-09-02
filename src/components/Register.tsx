import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Register: React.FC = () => {
  const [showShipping, setShowShipping] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailValid(validateEmail(newEmail));
  };

  return (
    <Container>
      <h1>Register</h1>
      <Form>
        <Form.Group as={Row}>
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Col>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            isInvalid={!emailValid}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formStreet1">
          <Form.Label>Street 1</Form.Label>
          <Form.Control type="text" placeholder="Street 1" />
        </Form.Group>

        <Form.Group controlId="formStreet2">
          <Form.Label>Street 2</Form.Label>
          <Form.Control type="text" placeholder="Apt#" />
        </Form.Group>

        <Form.Group as={Row}>
          <Col md={8}>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Zip Code" />
          </Col>
          <Col md={4}>
            <Form.Check
              type="checkbox"
              label="Use this address for shipping"
              onChange={() => setShowShipping(!showShipping)}
            />
          </Col>
        </Form.Group>

        {!showShipping && (
          <>
            <Form.Group controlId="formShippingStreet1">
              <Form.Label>Shipping Street 1</Form.Label>
              <Form.Control type="text" placeholder="Shipping Street 1" />
            </Form.Group>

            <Form.Group controlId="formShippingStreet2">
              <Form.Label>Shipping Street 2</Form.Label>
              <Form.Control type="text" placeholder="Shipping Apt#" />
            </Form.Group>

            <Form.Group controlId="formShippingZip">
              <Form.Label>Shipping Zip Code</Form.Label>
              <Form.Control type="text" placeholder="Shipping Zip Code" />
            </Form.Group>
          </>
        )}

        <Button variant="primary" type="submit" disabled={!emailValid}>
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
