import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("STRIPE_PUBLISHABLE_KEY");

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#424770",
      "::placeholder": {
        color: "#aab7c4",
      },
      "::-webkit-input-placeholder": {
        color: "#aab7c4",
      },
      "::-moz-placeholder": {
        color: "#aab7c4",
      },
      ":-ms-input-placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
  hidePostalCode: true, // if you don't want the postal code field
};

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card!);

    if (result.error) {
      console.error(result.error.message);
    } else {
      // Send token to server or Stripe to create a charge
      // After successful payment, send a confirmation email
      fetch("/api/sendConfirmationEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "customer@email.com" }),
      });
    }
  };

  return (
    <form className="paymentForm" onSubmit={handleSubmit}>
      <div className="cardElementContainer">
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>
      <button className="payButton" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const Payment: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
