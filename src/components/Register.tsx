import React, { useState, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve username and password from sessionStorage when the component mounts
    const storedUsername = sessionStorage.getItem("username");
    const storedPassword = sessionStorage.getItem("password");

    if (storedUsername) setUsername(storedUsername);
    if (storedPassword) setPassword(storedPassword);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === passwordConfirmation && password.length >= 6) {
      // Save the username and password to sessionStorage
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("password", password);

      // Navigate to the login page using v6's useNavigate
      navigate("/login");
    } else {
      alert(
        "Please ensure your passwords match and are at least 6 characters long."
      );
    }
  };

  return (
    <Container style={{ maxWidth: "400px", marginTop: "50px" }}>
      <h2>Create account</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            placeholder="At least 6 characters"
          />
        </Form.Group>

        <Form.Group controlId="passwordConfirmation">
          <Form.Label>Re-enter password</Form.Label>
          <Form.Control
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="registerContinueBtn">
          Continue
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
