import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Logout from "./components/Logout";
import Login from "./components/Login";
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
