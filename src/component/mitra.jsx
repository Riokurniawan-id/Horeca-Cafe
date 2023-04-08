import Gojek from "../asset/img/Mitra/Gojek_logo_2019.svg.png";
import Shopee from "../asset/img/Mitra/shopee-food-logo-67B375139E-seeklogo.com.png";
import Tokopedia from "../asset/img/Mitra/Tokopedia.svg.png";

const listMitra = [
  {
    Gambar: Gojek,
    Alt: "Gojek",
  },
  {
    Gambar: Shopee,
    Alt: "Shoope",
  },
  {
    Gambar: Tokopedia,
    Alt: "Tokopedia",
  },
];

const Mitra = () => {
  const mitra = listMitra.map((listMitra) => (
    <img src={listMitra.Gambar} alt={listMitra.Alt} className="mitra-img" />
  ));
  return mitra;
};
const bungkus = () => {
  return (
    <section className="mitra">
      <h3>Bermitra Dengan</h3>
      <div className="container-mitra">{Mitra()}</div>
    </section>
  );
};

export default bungkus;
