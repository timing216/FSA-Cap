import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [stage, setStage] = useState(1); // 1 for email/phone, 2 for password
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve username and password from sessionStorage when the component mounts
    const storedUsername = sessionStorage.getItem("username");
    const storedPassword = sessionStorage.getItem("password");

    setEmailOrPhone(storedUsername || "");
    setPassword(storedPassword || "");
  }, []);

  const handleContinue = () => {
    if (stage === 1) {
      setStage(2);
    } else {
      // Handle login logic here
      setIsLoggedIn(true); // Set the user as logged in
      navigate("/"); // Navigate to the home page
    }
  };

  return (
    <Container style={{ maxWidth: "400px", marginTop: "50px" }}>
      <h2>Sign-In</h2>
      <Form>
        {stage === 1 ? (
          <>
            <Form.Group controlId="emailOrPhone">
              <Form.Label>Mobile phone number or email</Form.Label>
              <Form.Control
                type="text"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={handleContinue}
              className="loginContinueBtn"
            >
              Continue
            </Button>
          </>
        ) : (
          <>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={handleContinue}
              className="loginContinueBtn"
            >
              Sign In
            </Button>
          </>
        )}
      </Form>
    </Container>
  );
};

export default Login;
