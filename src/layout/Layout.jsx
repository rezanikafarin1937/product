import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { CartProvider } from "../context/CartContext";
import styles from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <CartProvider>
      <Header />
      <main className="wrapper">
        <div className="margin-top">{children}</div>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default Layout;
