import Home from "../pages/home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Search from "../pages/search/Search";
import Store from "../store/Store";
import ContactUs from "../pages/contact-us/ContactUs";
import Category from "../pages/category/Category";
import EyeHealthArticle from "../pages/blog/EyeHealthArticle";
import Accessories from "../pages/accessories/Accessories";

export const routes = [
  {
    path: "/",
    element: <Home />,
    title: "خانه",
  },

  {
    path: "/store",
    element: <Store />,
    title: "محصولات",
  },
  {
    path: "/category",
    element: <Category />,
    title: "دسته بندی ها",
  },
  {
    path: "/about",
    element: <About />,
    title: "درباره ما",
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
    title: "تماس با ما",
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
  {
    path: "/blog",
    element: <EyeHealthArticle />,
  },
  {
    path: "/accessories",
    element: <Accessories />,
    // title: "اکسسوری",
  },
];

export const routesMobile = [
  {
    key: "home",
    path: "/",
    element: <Home />,
    title: "خانه",
  },
  {
    key: "products",
    path: "/store",
    element: <Store />,
    title: "محصولات",
  },
  {
    key: "categories",
    path: "/category",
    element: <Category />,
    title: "دسته بندی ها",
  },
  {
    key: "about",
    path: "/about",
    element: <About />,
    title: "درباره ما",
  },
  {
    key: "contact",
    path: "/contact-us",
    element: <ContactUs />,
    title: "تماس با ما",
  },
];
