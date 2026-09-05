import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Cart from "../pages/cart/Cart";

export const routes = [
  {
    path: "/",
    element: <Home />,
    title : "Home"
  },
  {
    path: "/products",
    element: <Products />,
    title : "Products"
  },
  {
    path: "/about",
    element: <About />,
    title : "About"
  },
  {
    path: "/login",
    element: <Login />,
    title : "Login"
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product-details/:id",
    element: <ProductDetails />,
  },
];