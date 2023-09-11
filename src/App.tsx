import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Logout from "./components/Logout";
import Login from "./components/Login";
import { useState } from "react";
import { Product } from "./components/Home";
import Checkout from "./components/Checkout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState<{ items: Product[]; total: number }>({
    items: [],
    total: 0,
  });

  return (
    <>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} cart={cart} />
        <Routes>
          <Route
            path="/"
            element={
              <Home isLoggedIn={isLoggedIn} cart={cart} setCart={setCart} />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
