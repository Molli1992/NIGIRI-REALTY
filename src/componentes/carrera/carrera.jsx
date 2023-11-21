import React from "react";
import "./carrera.css";
import { Link, useNavigate } from "react-router-dom";

function Carrera() {
  const navigate = useNavigate();

  const onClickContacto = () => {
    navigate("/contacto");
  };
  return (
    <div className="body-nosotros">
      <div className="container-nosotros-1">
        <div className="card-nosotros-1">
          <h1>Carrera</h1>
          <p>
            En Taurus Capital nos comprometemos con el desarrollo de carrera de
            quienes buscan desplegar su pasión por el sector financiero. Conocé
            nuestras oportunidades laborales y sumate a un equipo de
            profesionales expertos en inverisiones y finanzas.
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
            Nos interesa acompañar el potencial de cada una de las personas que
            conforman nuestra compañía. Nuestra gente, nuestros clientes y
            nuestra comunidad son nuestros pilares. De esta forma tenemos como
            propósito: impulsar el desarrollo financiero, para construir un
            futuro más equitativo para todos. Nuestra gente hace la diferencia y
            vos podés ser parte de nuestro equipo.
          </p>
        </div>
      </div>

      <div className="container-nosotros-2">
        <div className="container-nosotros-3">
          <h1>Estas son algunas de nuestras cualidades:</h1>

          <p>
            Una amplia gama de soluciones financieras para personas humanas y
            jurídicas.
          </p>

          <p>
            Asesoramiento de primera línea local e internacional a nivel
            individual y corporativo.
          </p>

          <p>
            Informes de research con información sobre coyuntura y tendencias
            del mercado.
          </p>

          <p>Oportunidades de mercado just in time.</p>

          <p>Las comisiones más competitivas del mercado.</p>

          <p>
            Capacitación recurrente sobre nuevos productos, temas impositivos y
            normativos.
          </p>
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
          <h1>Comunicate con nosotros</h1>

          <p>
            En Taurus Capital ofrecemos servicios de calidad y satisfacemos las
            necesidades de nuestros clientes. No dude en ponerse en contacto con
            nosotros a través de nuestro formulario de contacto. Estamos a su
            disposición para ofrecerle nuestra experiencia y conocimientos.
          </p>

          <button
            className="btn-contacto-nosotros"
            onClick={onClickContacto}
            style={{ backgroundColor: "#333333", color: "#f2f2f2" }}
          >
            Contactanos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrera;
