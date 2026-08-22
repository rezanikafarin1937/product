import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
const App = () => {
  return (
    <Layout>
      <div className="wrapper">
        <Home />
        <Products />
        <About />
      </div>
    </Layout>
  );
};

export default App;
