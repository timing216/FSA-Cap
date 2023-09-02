import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Logout from "./components/Logout";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Cart" element={<Register />} />
          <Route path="/Cart" element={<Logout />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
