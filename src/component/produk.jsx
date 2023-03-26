const Produk = () => {
  return (
    <section className="produk">
      <h1>| Beberapa Produk Kami |</h1>
      <div className="container-produk">
        <div className="card-produk">
          <img src="asset/img/Product/coffee_special.jpg" alt="" />
          <h2>Kopi Spesial</h2>
          <p>
            Nikmati aroma kopi yang khas dan cita rasa yang otentik dengan kopi
            spesial kami.
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
  );
};

export default Produk;
