import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
// import { CartProvider } from "../context/CartContext";
// import { UserProvider } from "../context/UserContext";
import { AppProvider } from "../context/AppContext";
import styles from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <AppProvider>
        <Header />
        <main className="wrapper">
          <div className="margin-top">{children}</div>
        </main>
        <Footer />
    </AppProvider>
  );
}

export default Layout;
