import "./App.css";
import Hiro from "./component/header";
import About from "./component/about";
import Mitra from "./component/mitra";
import Produk from "./component/produk";
import Footer from "./component/footer";
import Copyright from "./component/copyright";

const App = () => {
  return (
    <div>
      <Hiro />
      <About />
      <Mitra />
      <section className="produk">
        <h1>| Beberapa Produk Kami |</h1>
        <div className="container-produk">
          <Produk />
        </div>
      </section>

      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
