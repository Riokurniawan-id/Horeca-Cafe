import kopi from "../asset/img/Product/coffee_special.jpg";
import chicken_sandwich from "../asset/img/Product/chicken_sandwich.jpg";
import ice_tea from "../asset/img/Product/Ice_tea.jpg";
import Pancake from "../asset/img/Product/Pancake.jpg";

const listProduk = [
  {
    Nama: "Kopi Spesial",
    describe:
      "Nikmati aroma kopi yang khas dan cita rasa yang otentik dengan kopi spesial kami.",
    Gambar: kopi,
  },
  {
    Nama: "Sandwich Ayam",
    describe:
      "Roti gurih yang dilengkapi dengan ayam panggang dan aneka sayuran segar.",
    Gambar: chicken_sandwich,
  },
  {
    Nama: "Es Teh Manis",
    describe:
      "Minuman segar yang terbuat dari teh berkualitas tinggi dan gula merah alami.",
    Gambar: ice_tea,
  },
  {
    Nama: "Pancake Blueberry",
    describe: "Pancake lezat yang diberi taburan blueberry segar dan madu.",
    Gambar: Pancake,
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

const daftarProduk = () => {
  return (
    <section className="produk">
      <h1>| Beberapa Produk Kami |</h1>
      <div className="container-produk">{Produklist()}</div>
    </section>
  );
};

export default daftarProduk;
