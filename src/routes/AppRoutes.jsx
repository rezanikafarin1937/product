import { Routes, Route } from "react-router-dom";
import { routes } from "./RouteManager";
import Cart from "../pages/cart/Cart";
import PrivateRoute from "../components/privateReoute/PrivateRoute";

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
      <Route element={<PrivateRoute/>}>
        <Route path="/cart" element={<Cart/>}></Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;