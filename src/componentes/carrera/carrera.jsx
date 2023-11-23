import React from "react";
import "./carrera.css";
import { useNavigate } from "react-router-dom";

function Carrera() {
  window.scroll(0, 0);
  const navigate = useNavigate();

  const onClickContacto = () => {
    navigate("/contacto");
  };
  return (
    <div className="body-nosotros">
      <div className="container-nosotros-1">
        <div className="card-nosotros-1">
          <h1>Career</h1>
          <p>
            At Nigiri we are committed to the career development of those who
            seek to display their passion for the real estate sector. Known our
            investment opportunities and join a team of Professional experts in
            investments and real estate projects.
          </p>
        </div>
      </div>

      <div
        className="container-nosotros-2"
        style={{ backgroundColor: "rgb(74, 234, 220)" }}
      >
        <div className="container-nosotros-3">
          <img
            src="https://tauruscapital.com.ar/wp-content/uploads/2023/05/Carrera-Img.webp"
            alt="Error en la carga de la imagen"
            style={{ height: "350px" }}
          />
        </div>

        <div className="container-nosotros-3" style={{ color: "#333333" }}>
          <p>
            We are interested in accompanying the potential of each of the
            people who make up our company. Our people, our clients and our
            community are our pillars. In this way our purpose is: to promote
            real estate development, to build a more equitable future for all.
            Our people make a difference and you can be part of our team.
          </p>
        </div>
      </div>

      <div className="container-nosotros-2">
        <div className="container-nosotros-3">
          <h1>These are some of our qualities:</h1>

          <p>A wide range of real estate solutions for humans and legal.</p>

          <p>
            First-line local and international advice at the level individual
            and corporate.
          </p>

          <p>
            Research reports with information on the situation and trends From
            the market.
          </p>

          <p>Just in time market opportunities.</p>

          <p>The most competitive commissions on the market.</p>

          <p>Recurring training on new products, tax issues and normative.</p>
        </div>

        <div className="container-nosotros-3">
          <img
            src="https://tauruscapital.com.ar/wp-content/uploads/2023/05/Carrera-Cualidades-Img.webp"
            alt="Error en la carga de la imagen"
          />
        </div>
      </div>

      <div
        className="container-nosotros-2"
        style={{ backgroundColor: "rgb(74, 234, 220)" }}
      >
        <div className="container-nosotros-3" style={{ color: "#333333" }}>
          <h1>Contact us</h1>

          <p>
            At Nigiri we offer quality services and satisfy the needs of our
            clients. Feel free to contact us through our contact form. We are at
            your willingness to offer you our experience and knowledge.
          </p>

          <button
            className="btn-contacto-nosotros"
            onClick={onClickContacto}
            style={{ backgroundColor: "#333333", color: "#f2f2f2" }}
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrera;
