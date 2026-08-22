import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import About from "../pages/about/About";

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
];