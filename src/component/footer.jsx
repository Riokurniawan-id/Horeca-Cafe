const Footer = () => {
  return (
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
  );
};

export default Footer;
