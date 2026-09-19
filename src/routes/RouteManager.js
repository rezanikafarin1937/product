import Home from "../pages/home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Search from "../pages/search/Search";
import Store from "../store/Store";
import ContactUs from "../pages/contact-us/ContactUs";
import CatsPage from "../pages/cats-page/CatsPage";

export const routes = [
  {
    path: "/",
    element: <Home />,
    title : "خانه"
  },
  {
    path: "/store",
    element: <Store />,
    title : "محصولات"
  },
  {
    path: "/cats-page",
    element: <CatsPage />,
    title : "دسته بندی ها"
  },
  {
    path: "/about",
    element: <About />,
    title : "درباره ما"
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
    title : "تماس با ما"
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