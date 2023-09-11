import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Checkout: React.FC = () => {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleCheckout = () => {
    // Handle the checkout process here
    // For now, just log the data
    console.log("Shipping Info:", shippingInfo);
    console.log("Payment Info:", paymentInfo);
  };

  return (
    <Container>
      <h3>Checkout</h3>

      <Form onSubmit={handleCheckout}>
        <h4>Shipping Information</h4>
        {/* ... Add form fields for shipping info ... */}

        <h4>Payment Information</h4>
        {/* ... Add form fields for payment info ... */}

        <Button className="completeCheckout" type="submit">
          Complete Checkout
        </Button>
      </Form>
    </Container>
  );
};

export default Checkout;
