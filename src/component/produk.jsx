import kopi from "../asset/img/Product/coffee_special.jpg";
// import chicken_sandwich from "../asset/img/Product/chicken_sandwich.jpg";

const listProduk = [
  {
    Nama: "Kopi Spesial",
    describe:
      "Nikmati aroma kopi yang khas dan cita rasa yang otentik dengan kopi spesial kami.",
    Gambar: kopi,
  },
];

function Produklist() {
  const Produk = listProduk.map((listProduk) => (
    <div className="card-produk">
      <img src={listProduk.Gambar} alt={listProduk.Nama} />
      <h2>{listProduk.Nama}</h2>
      <p>{listProduk.describe}</p>
    </div>
  ));
  return Produk;
}

export default Produklist;
