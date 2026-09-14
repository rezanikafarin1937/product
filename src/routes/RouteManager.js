import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Search from "../pages/search/Search";
import Store from "../store/Store";

export const routes = [
  // {
  //   path: "/",
  //   element: <Home />,
  //   title : "Home"
  // },
  {
    path: "/",
    element: <Store />,
    title : "Store"
  },
  // {
  //   path: "/products",
  //   element: <Products />,
  //   title : "Products"
  // },
  {
    path: "/about",
    element: <About />,
    title : "About"
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/product-details/:id",
    element: <ProductDetails />,
  },
];