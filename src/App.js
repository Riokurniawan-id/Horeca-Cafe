import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="nav">
        <div className="container-nav1">
          <a>Horeca</a>
        </div>
        <div className="container-nav2">
          <a href="">About</a>
          <a href="">Product</a>
          <a href="">Information</a>
        </div>
      </nav>

      <section id="Home" className="Hiro-section">
        <div className="element-hiro">
          <h1>
            Selamat Datang di <br />
            <span>Horeca Cafe</span>
          </h1>
          <p>Jangan lewatkan pengalaman Ngopi yang luar biasa di Horeca Cafe</p>
          <a href="#">
            <button>Pesan Sekarang</button>
          </a>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container-about">
          <img src="asset/img/img-owner-abaout.png" alt="Owner" />
          <div className="container-text-about">
            <h2>@ini_gk_tau_siapa</h2>
            <h1>
              Horeca Cafe adalah tempat yang cocok untuk Anda yang ingin
              menikmati suasana yang nyaman dan santai sambil menikmati berbagai
              hidangan lezat. Kami menyediakan berbagai menu yang pasti
              memuaskan selera Anda.
            </h1>
          </div>
        </div>
        <div className="container-keterangan-cafe">
          <h1 className="judul-keterangan">| Tentang Kami |</h1>
          <div className="container-visi-misi">
            <div className="keterangan">
              <h1>Visi</h1>
              <p>
                Menjadi cafe yang menjadi tujuan utama bagi para pecinta kopi
                dan penggemar kuliner di kota ini dengan menyediakan produk
                berkualitas dan layanan yang memuaskan.
              </p>
            </div>
            <div className="keterangan">
              <h1>Misi</h1>
              <p>
                Menyajikan kopi yang berkualitas dan menyenangkan bagi pelanggan
                dan Memberikan pelayanan yang ramah dan profesional Serta
                Menjaga kebersihan dan kesehatan lingkungan kerja serta
                mengelola cafe secara bertanggung jawab terhadap lingkungan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mitra">
        <h3>Bermitra Dengan</h3>
        <div className="container-mitra">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Gojek_logo_2019.svg"
            alt="Gojek"
            className="mitra-img"
          />
          <img
            src="asset/img/Mitra/shopee-food-logo-67B375139E-seeklogo.com.png"
            alt="shoope"
            className="mitra-img"
          />
          <img
            src="asset/img/Mitra/Tokopedia.svg.png"
            alt="Tokopedia"
            className="mitra-img"
          />
        </div>
      </section>

      <section className="produk">
        <h1>| Beberapa Produk Kami |</h1>
        <div className="container-produk">
          <div className="card-produk">
            <img src="asset/img/Product/coffee_special.jpg" alt="" />
            <h2>Kopi Spesial</h2>
            <p>
              Nikmati aroma kopi yang khas dan cita rasa yang otentik dengan
              kopi spesial kami.
            </p>
          </div>

          <div className="card-produk">
            <img src="asset/img/Product/chicken_sandwich.jpg" alt="" />
            <h2>Sandwich Ayam</h2>
            <p>
              Roti gurih yang dilengkapi dengan ayam panggang dan aneka sayuran
              segar.
            </p>
          </div>

          <div className="card-produk">
            <img src="asset/img/Product/Pancake.jpg" alt="" />
            <h2>Pancake Blueberry</h2>
            <p>Pancake lezat yang diberi taburan blueberry segar dan madu.</p>
          </div>

          <div className="card-produk">
            <img src="asset/img/Product/Ice_tea.jpg" alt="" />
            <h2>Es Teh Manis</h2>
            <p>
              Minuman segar yang terbuat dari teh berkualitas tinggi dan gula
              merah alami.
            </p>
          </div>
        </div>
      </section>

      <section className="footer-web">
        <div className="container">
          <div className="container-clock">
            <h2>HOURS OF OPERATION</h2>
            <div className="jam-oprasional">
              <i data-feather="clock" className="clock"></i>
              <p>Monday - Friday: 7am - 9pm</p>
            </div>
            <div className="jam-oprasional">
              <i data-feather="clock" className="clock"></i>
              <p>Monday - Friday: 7am - 9pm</p>
            </div>
          </div>
          <div className="container-social">
            <a href="" className="social">
              <i data-feather="instagram"></i>
              <p>Instagram</p>
            </a>

            <a href="" className="social">
              <i data-feather="facebook"></i>
              <p>Facebook</p>
            </a>
            <a href="" className="social">
              <i data-feather="twitter"></i>
              <p>Twitter</p>
            </a>
          </div>
        </div>

        <div className="container2">
          <div className="contact">
            <h2>| CONTACT US |</h2>
            <p>
              | Alamat: Jl. Teuku Umar, Kec. Tanjungkarang, Kota Bandar Lampung,
              Lampung 35121 |
            </p>
            <p>| Phone: (555) 555-1234 |</p>
            <p>| Email: info@horecacafewebsite.com |</p>
          </div>
          <div className="map"></div>
        </div>
      </section>

      <footer>
        <p>© 2023 RioKurniawan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
