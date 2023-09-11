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
            {item.title} : ${item.price}
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
      <Link to="/checkout">
        <button className="checkoutButton">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
