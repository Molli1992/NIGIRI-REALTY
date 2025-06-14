import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./inicio.css";
import Contacto from "../contacto/contacto";
import Swal from "sweetalert2";
import HomeImg1 from "../../imagenes/home/home-img-1.jpg";
import HomeImg2 from "../../imagenes/home/home-img-2.webp";
import HomeImg3 from "../../imagenes/home/home-img-3.jpg";
import HomeImg4 from "../../imagenes/home/home-img-4.jpg";
import HomeImg5 from "../../imagenes/home/home-img-5.webp";

function Inicio() {
  const [stateScroll, setStateScroll] = useState(true);

  if (stateScroll === true) {
    window.scroll(0, 0);
    setStateScroll(false);
  }
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
  });

  const onClickNosotros = () => {
    navigate("/nosotros");
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (state.email === "") {
      Swal.fire({
        title: "Info!",
        text: "Complete all fields!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "Successce!",
        text: "Message sent successfully!",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        setState({
          email: "",
        });
      });
    }
  };
  return (
    <div className="body-inicio">
      <header className="header">
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Nigiri Realty</span>
            <span className="heading-primary-sub">
              Experts in the real estate market
            </span>
          </h1>

          <Link to="/contacto" className="btn">
            Contact us
          </Link>
        </div>
      </header>

      <div className="container-1-inicio">
        <h1>Our Services</h1>

        <p>
          We offer an unparalleled experience in buying and selling properties.
          Our team of highly trained professionals combines deep market
          knowledge with exclusivity and prestige.
        </p>
      </div>

      <div className="contaner-inicio-2">
        <div className="container-inicio-3">
          <h3>Approach</h3>
          <p>
            Nigiri, a modern and committed company. Its focus on innovation is
            one of the fundamental pillars on which it is based. As Real Estate
            becomes more complex, having experts to competently advise is
            crucial. Address this challenge seriously, providing judgment and
            guarantee in decision making
          </p>
        </div>

        <div className="container-inicio-3">
          <img src={HomeImg1} alt="Error en la carga de la imagen" />
        </div>
      </div>

      <div className="contaner-inicio-2">
        <div className="container-inicio-3">
          <img src={HomeImg2} alt="Error en la carga de la imagen" />
        </div>

        <div className="container-inicio-3">
          <h3>Real Estate</h3>
          <p>
            Nigiri encompasses a variety of assets that have high economic and
            social value. These assets go beyond homes and buildings; They also
            include land, natural resources, and other improvements found on the
            property. In other words, it refers to all activities related to the
            purchase and sale of real estate assets.
          </p>
        </div>
      </div>

      <div className="contaner-inicio-2">
        <div className="container-inicio-3">
          <h3>Investments and development</h3>
          <p>
            This category involves investment in real estate projects and
            property development. Investors look for opportunities to acquire,
            improve and sell properties, or rent them out for a passive income
            stream.
          </p>
        </div>

        <div className="container-inicio-3">
          <img src={HomeImg3} alt="Error en la carga de la imagen" />
        </div>
      </div>

      <div className="contaner-inicio-2">
        <div className="container-inicio-3">
          <img src={HomeImg4} alt="Error en la carga de la imagen" />
        </div>

        <div className="container-inicio-3">
          <h3>Strategies</h3>
          <p>
            A total knowledge of the necessary tools and vehicles allows us in
            practice to obtain the absolute scope in terms of efficient medium
            solutions which transcend the strictly stock market.
          </p>
        </div>
      </div>

      <div className="container-inicio-4">
        <h1>Us</h1>

        <p>
          We are a committed company, dedicated to knowing and understanding the
          needs of our clients with the aim of creating value, to through
          relationships based on trust and mutual respect, with professionalism
          and excellence in quality of service. Today we offer a diversity of
          real estate solutions for individuals, companies and institutions.
        </p>

        <div>
          <button onClick={onClickNosotros}>See More</button>
        </div>

        <img
          src={HomeImg5}
          alt="Error en la carga de la imagen"
        />
      </div>

      <div className="container-inicio-5">
        <div className="card-container-inicio">
          <h1>Weekly report</h1>

          <p>
            Subscribe and receive daily updates about the market real estate,
            exclusive analysis and advice from our experts.
          </p>

          <div className="container-input">
            <input
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={onChange}
            />
            <button onClick={onSubmit}>Subscribe</button>
          </div>
        </div>
      </div>

      <Contacto />
    </div>
  );
}

export default Inicio;
