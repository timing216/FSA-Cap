import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Product } from "./Home";

interface CheckoutProps {
  cart: { items: Product[]; total: number };
}

const Checkout: React.FC<CheckoutProps> = ({ cart }) => {
  return (
    <Container className="checkoutContainer">
      <Row>
        <Col md={8} className="leftContainer">
          <h1>Checkout</h1>
          {/*... your form components remain unchanged ...*/}
          <Form>
            <Form.Group>
              <Form.Label className="checkoutFormLabel">
                Country/Region
              </Form.Label>
              <Form.Control type="text" className="checkoutInput" />
            </Form.Group>

            <Form.Group>
              <Form.Label className="checkoutFormLabel">
                Full name (First and Last name)
              </Form.Label>
              <Form.Control type="text" className="checkoutInput" />
            </Form.Group>

            <Form.Group>
              <Form.Label className="checkoutFormLabel">
                Phone number
              </Form.Label>
              <Form.Control type="tel" className="checkoutInput" />
              <Form.Text className="text-muted">
                May be used to assist delivery
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label className="checkoutFormLabel">Address</Form.Label>
              <Form.Control
                type="text"
                className="checkoutInput"
                placeholder="Street address"
              />
              <Form.Control
                type="text"
                className="checkoutInput"
                placeholder="Apt, suite, unit, building, floor, etc."
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="checkoutFormLabel">City</Form.Label>
              <Form.Control type="text" className="checkoutInput" />
            </Form.Group>

            <Form.Group>
              <Form.Label className="checkoutFormLabel">State</Form.Label>
              <Form.Control type="text" className="checkoutInput" />
            </Form.Group>

            <Form.Group>
              <Form.Label className="checkoutFormLabel">ZIP Code</Form.Label>
              <Form.Control type="text" className="checkoutInput" />
            </Form.Group>

            <Form.Group>
              <Form.Check
                type="checkbox"
                className="checkoutCheckbox"
                label="Make this my default address"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="checkoutFormLabel">
                Delivery instructions (optional)
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="checkoutTextarea"
                placeholder="Add preferences, notes, access codes and more"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="checkoutButton">
              Checkout
            </Button>
          </Form>
        </Col>

        <Col md={4} className="rightContainer">
          {/* Here, you can add the right container content */}
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
