import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MobileBottomNav from "../components/MobileBottomNav/MobileBottomNav";
// import { CartProvider } from "../context/CartContext";
// import { UserProvider } from "../context/UserContext";
import { AppProvider } from "../context/AppContext";
import styles from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <AppProvider>
      <Header />
      <main className="margin-top">{children}</main>
      <MobileBottomNav />
      <Footer />
    </AppProvider>
  );
}

export default Layout;
