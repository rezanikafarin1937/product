import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import About from "./pages/about/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;