
import { Routes, Route } from "react-router-dom";
import { routes } from "./RouteManager";
import Cart from "../pages/cart/Cart";

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}

      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default AppRoutes;
