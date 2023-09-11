import React from "react";
import { Product } from "./Home"; // Importing the Product interface

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
    <div>
      <h2>Your Cart</h2>
      {cart.items.map((item) => (
        <div key={item.id}>
          <span>
            {item.title} - ${item.price}
          </span>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      <div>Total: ${cart.total}</div>
    </div>
  );
};

export default Cart;
