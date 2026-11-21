import { Routes, Route } from "react-router-dom";
import { routes } from "./RouteManager";
import Cart from "../pages/cart/Cart";
import ScrollToTop from "../utils/ScrollToTop/ScrollToTop";

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
