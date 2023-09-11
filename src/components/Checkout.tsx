// "./components/Checkout"

import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Mock data for cart items
const cartItems = [
  { id: 1, title: "Item 1", price: 10 },
  { id: 2, title: "Item 2", price: 20 },
  // ...  more items as needed
];

const Checkout: React.FC = () => {
  const navigate = useNavigate();

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Container>
      <h1>Checkout</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{`$${item.price}`}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>Total</td>
            <td>{`$${totalPrice}`}</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="primary" onClick={() => navigate("/")}>
        Complete Checkout
      </Button>
    </Container>
  );
};

export default Checkout;
