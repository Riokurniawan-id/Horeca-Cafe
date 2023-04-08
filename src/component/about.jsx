import Profile from "../asset/img/img-owner-abaout.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container-about">
        <img src={Profile} alt="Owner" />
        <div className="container-text-about">
          <h2>@ini_gk_tau_siapa</h2>
          <h1>
            Horeca Cafe adalah tempat yang cocok untuk Anda yang ingin menikmati
            suasana yang nyaman dan santai sambil menikmati berbagai hidangan
            lezat. Kami menyediakan berbagai menu yang pasti memuaskan selera
            Anda.
          </h1>
        </div>
      </div>
      <div className="container-keterangan-cafe">
        <h1 className="judul-keterangan">| Tentang Kami |</h1>
        <div className="container-visi-misi">
          <div className="keterangan">
            <h1>Visi</h1>
            <p>
              Menjadi cafe yang menjadi tujuan utama bagi para pecinta kopi dan
              penggemar kuliner di kota ini dengan menyediakan produk
              berkualitas dan layanan yang memuaskan.
            </p>
          </div>
          <div className="keterangan">
            <h1>Misi</h1>
            <p>
              Menyajikan kopi yang berkualitas dan menyenangkan bagi pelanggan
              dan Memberikan pelayanan yang ramah dan profesional Serta Menjaga
              kebersihan dan kesehatan lingkungan kerja serta mengelola cafe
              secara bertanggung jawab terhadap lingkungan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
