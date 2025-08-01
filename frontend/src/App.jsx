import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Repair from "./pages/Repair";
import Shop from "./pages/Shop";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div >
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="repair" element={<Repair />} />
        <Route path="shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
