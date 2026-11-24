import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MobileBottomNav from "../components/MobileBottomNav/MobileBottomNav";
import { AppProvider } from "../context/AppContext";
import "./Layout.module.scss";

function Layout({ children }) {
  return (
    <AppProvider>
      <Header />
      <main>{children}</main>
      <MobileBottomNav />
      <Footer />
    </AppProvider>
  );
}

export default Layout;
