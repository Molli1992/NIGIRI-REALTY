import "./nosotros.css";
import { Link, useNavigate } from "react-router-dom";
import SliderAboutImg1 from "../../imagenes/aboutUs/slider-about-1.jpeg";
import SliderAboutImg2 from "../../imagenes/aboutUs/slider-about-2.webp";
import SliderAboutImg3 from "../../imagenes/aboutUs/slider-about-3.webp";
import AboutUsImg1 from "../../imagenes/aboutUs/about-us-img-1.webp";
import AboutUsImg2 from "../../imagenes/aboutUs/about-us-img-2.webp";

function Nosotros() {
  window.scroll(0, 0);
  const navigate = useNavigate();

  const onClickContacto = () => {
    navigate("/contacto");
  };
  return (
    <div className="body-nosotros">
      <div className="container-nosotros-1">
        <div className="card-nosotros-1">
          <h1>About us</h1>
          <p>
            With years of experience in the real estate market, our team of
            highly trained professionals is dedicated to helping our clients
            achieve their financial goals.
          </p>
        </div>
      </div>

      <section className="section-about">
        <div className="u-center-text u-margin-bottom-80">
          <h2 className="heading-secondary">Our history</h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary">ABOUT US</h3>

            <p className="paragraph">
              We are the result of the association of a group of specialists
              with proven capacity, track record and experience in the local and
              international real estate market.
            </p>

            <h3 className="heading-tertiary">Our way of working</h3>

            <p className="paragraph">
              With a strict focus on providing a comprehensive service, we have
              consolidated a team with extensive experience in all real estate
              fields that allows us to advise a client base that includes
              individuals, SMEs, Corporations, Investors Institutional and
              Public Organizations.
            </p>

            <Link to="/contacto" className="btn-text">
              Contact us &rarr;
            </Link>
          </div>

          <div className="col-2-of-2">
            <div className="composition">
              <img
                src={SliderAboutImg1}
                alt="Error en la carga de la imagen"
                className="composition_photo composition_photo--p1"
              />

              <img
                src={SliderAboutImg2}
                alt="Error en la carga de la imagen"
                className="composition_photo composition_photo--p2"
              />

              <img
                src={SliderAboutImg3}
                alt="Error en la carga de la imagen"
                className="composition_photo composition_photo--p3"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container-nosotros-2">
        <div className="container-nosotros-3">
          <img src={AboutUsImg1} alt="Error en la carga de la imagen" />
        </div>

        <div className="container-nosotros-3">
          <h1>¿Why choose us?</h1>

          <p>
            We have a multidisciplinary team of specialists in each one of our
            strategic areas, with great recognition and extensive networks of
            contacts. This allows us to provide numerous solutions according to
            the different customer profiles at all times weather.
          </p>

          <p>
            There are multiple stock market and over-the-counter instruments
            that They can be used by individuals, companies of all sizes and
            sector, Institutional Investors and even Public Entities. Whether
            it's for Financing, for Investment or for Management, our team
            carries out a deep analysis and personalized advice on the best
            instruments to meet the needs of each client.
          </p>
        </div>
      </div>

      <div
        className="container-nosotros-2"
        style={{ backgroundColor: "lightgray" }}
      >
        <div className="container-nosotros-3" style={{ color: "#333333" }}>
          <h1>Strategic Alliances</h1>

          <p>
            We have strategic alliances with both local institutions as
            international. These include research services, access to
            international real estate platforms, which allow us access in real
            time what is happening in the main markets real estate companies in
            the world and assist us in our primary objective of provide our
            clients with the best financial solutions.
          </p>
        </div>

        <div className="container-nosotros-3">
          <img src={AboutUsImg2} alt="Error en la carga de la imagen" />
        </div>
      </div>

      <div className="container-nosotros-2">
        <div className="container-nosotros-3">
          <h1>Contact us</h1>

          <p>
            At Nigiri we offer quality services and satisfy the needs of our
            clients. Feel free to contact us through our contact form. We are at
            your willingness to offer you our experience and knowledge.
          </p>

          <button className="btn-contacto-nosotros" onClick={onClickContacto}>
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
