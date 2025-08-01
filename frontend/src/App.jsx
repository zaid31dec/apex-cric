import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Repair from "./pages/Repair";
import Shop from "./pages/Shop";
import Service from "./pages/Service";
import NavBar from "./components/NavBar";
import Price from "./pages/Price";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="repair" element={<Repair />} />
        <Route path="shop" element={<Shop />} />
        <Route path="service" element={<Service />} />
        <Route path="price" element={<Price />} />
      </Routes>
    </div>
  );
}

export default App;
