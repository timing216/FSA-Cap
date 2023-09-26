import React from "react";
import { Link } from "react-router-dom";
import { Product } from "./Home";

interface CartProps {
  cart: { items: Product[]; total: number };
  setCart: React.Dispatch<
    React.SetStateAction<{ items: Product[]; total: number }>
  >;
}

const Cart: React.FC<CartProps> = ({ cart, setCart }) => {
  // Function to remove an item from the cart
  const handleRemove = (productId: number) => {
    const newItems = cart.items.filter((item) => item.id !== productId);
    const newTotal = newItems.reduce((acc, item) => acc + item.price, 0);
    setCart({ items: newItems, total: newTotal });
  };

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {cart.items.map((item) => (
        <div key={item.id}>
          <span className="totalPriceInCart">
            {<img src={item.image} alt={item.title} width="50px%" />}
            {"   "}
            {item.title} : ${parseFloat(item.price.toFixed(2))}
          </span>
          <button
            className="removeButton"
            onClick={() => handleRemove(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="cartTotal">Total: ${cart.total}</div>

      {cart.total > 0 ? (
        <Link to="/checkout">
          <button className="cartCheckoutButton">Proceed to Checkout</button>
        </Link>
      ) : (
        <button className="cartCheckoutButton" disabled>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
