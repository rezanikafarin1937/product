import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <>
      <Header />

      <main className="wrapper">
        <div className="margin-top">{children}</div>
      </main>

      <Footer />
    </>
  );
}

export default Layout;
