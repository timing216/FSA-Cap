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
          <div className="cartTotal">Total: ${cart.total}</div>

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
            <Row>
              <Form.Group as={Col}>
                <Form.Label className="checkoutFormLabel">City</Form.Label>
                <Form.Control type="text" className="checkoutInput" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="checkoutFormLabel">State</Form.Label>
                <Form.Control as="select" className="checkoutInput">
                  <option value="">Select State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Alabama</option>
                  <option value="CA">Arkansas</option>
                  <option value="CO">California</option>
                  <option value="CT">Colorado</option>
                  <option value="DE">Connecticut</option>
                  <option value="FL">Delaware</option>
                  <option value="GA">Florida</option>
                  <option value="HI">Georgia</option>
                  <option value="ID">Hawaii</option>
                  <option value="IL">Idaho</option>
                  <option value="IN">Illinois</option>
                  <option value="IA">Indiana</option>
                  <option value="KS">Iowa</option>
                  <option value="KY">Kansas</option>
                  <option value="LA">Kentucky</option>
                  <option value="ME">Louisiana</option>
                  <option value="MD">Maine</option>
                  <option value="MA">Maryland</option>
                  <option value="MI">Massachusetts</option>
                  <option value="MN">Michigan</option>
                  <option value="MS">Minnesota</option>
                  <option value="MO">Mississippi</option>
                  <option value="MT">Missouri</option>
                  <option value="NE">Montana</option>
                  <option value="NV">Nebraska</option>
                  <option value="NH">Nevada</option>
                  <option value="NJ">New Hampshire</option>
                  <option value="NM">New Jersey</option>
                  <option value="NY">New Mexico</option>
                  <option value="NC">New York</option>
                  <option value="ND">North Carolina</option>
                  <option value="OH">North Dakota</option>
                  <option value="OK">Ohio</option>
                  <option value="OR">Oklahoma</option>
                  <option value="PA">Oregon</option>
                  <option value="RI">Pennsylvania</option>
                  <option value="SC">Rhode Island</option>
                  <option value="SD">South Carolina</option>
                  <option value="TN">South Dakota</option>
                  <option value="TX">Tennessee</option>
                  <option value="UT">Texas</option>
                  <option value="VT">Utah</option>
                  <option value="VA">Vermont</option>
                  <option value="WA">Virginia</option>
                  <option value="WV">Washington</option>
                  <option value="WI">West Virginia</option>
                  <option value="WY">Wisconsin</option>
                  <option value="AL">Wyoming</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="checkoutFormLabel">ZIP Code</Form.Label>
                <Form.Control type="text" className="checkoutInput" />
              </Form.Group>
            </Row>
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
