import React from "react";
import "./nosotros.css";
import { Link, useNavigate } from "react-router-dom";

function Nosotros() {
  window.scroll(0, 0);
  const navigate = useNavigate();

  const onClickContacto = () => {
    navigate("/contacto")
  };
  return (
    <div className="body-nosotros">
      <div className="container-nosotros-1">
        <div className="card-nosotros-1">
          <h1>Sobre nosotros</h1>
          <p>
            Con años de experiencia en el mercado de capitales argentino,
            nuestro equipo de profesionales altamente capacitados está dedicado
            a ayudar a nuestros clientes a alcanzar sus metas financieras.
          </p>
        </div>
      </div>

      <section className="section-about">
        <div className="u-center-text u-margin-bottom-80">
          <h2 className="heading-secondary">Nuestra historia</h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary">QUIENES SOMOS</h3>

            <p className="paragraph">
              Somos el fruto de la asociación de un grupo de especialistas con
              probada capacidad, trayectoria y experiencia en el mercado de
              capitales local e internacional.
            </p>

            <h3 className="heading-tertiary">Nuestra Forma de trabajo</h3>

            <p className="paragraph">
              Con un estricto foco en brindar un servicio integral, hemos
              consolidado un equipo de amplia experiencia en todos los campos de
              las finanzas que nos permite asesorar a una base de clientes que
              comprende individuos, PYMES, Corporaciones, Inversores
              Institucionales y Organismos Públicos.
            </p>

            <Link to="/contacto" className="btn-text">
              Contactanos &rarr;
            </Link>
          </div>

          <div className="col-2-of-2">
            <div className="composition">
              <img
                src="https://negociosdigitalesmovistar.com/wp-content/uploads/2015/10/ico-destinonegocio-invertir-en-empresas-istock-getty-images-1030x686-1.jpg"
                alt="Error en la carga de la imagen"
                className="composition_photo composition_photo--p1"
              />

              <img
                src="https://www.economiasimple.net/wp-content/uploads/2011/09/invertir-empresas-1200x900.jpg"
                alt="Error en la carga de la imagen"
                className="composition_photo composition_photo--p2"
              />

              <img
                src="https://www.cronista.com/files/image/475/475486/630929a5a5014.jpg"
                alt="Error en la carga de la imagen"
                className="composition_photo composition_photo--p3"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container-nosotros-2">
        <div className="container-nosotros-3">
          <img
            src="https://tauruscapital.com.ar/wp-content/uploads/2023/05/Nosotros-PorQueElegirnos-Img.webp"
            alt="Error en la carga de la imagen"
          />
        </div>

        <div className="container-nosotros-3">
          <h1>¿Por qué elegirnos?</h1>

          <p>
            Contamos con un equipo multidisciplinario de especialistas en cada
            una de nuestras áreas estratégicas, con gran reconocimiento y
            amplias redes de contactos. Esto nos permite brindar numerosas
            soluciones según los distintos perfiles de cliente en cada momento
            del tiempo.
          </p>

          <p>
            Existen múltiples instrumentos bursátiles y extrabursátiles que
            pueden ser usados tanto por Individuos, Empresas de todo tamaño y
            rubro, Inversores Institucionales y hasta Entidades Públicas. Ya sea
            para Financiación, para Inversión o para Gestión, nuestro equipo
            realiza un profundo análisis y asesoramiento personalizado sobre los
            mejores instrumentos para cubrir la necesidad de cada cliente.
          </p>
        </div>
      </div>

      <div
        className="container-nosotros-2"
        style={{ backgroundColor: "rgb(74, 234, 220)" }}
      >
        <div className="container-nosotros-3" style={{ color: "#333333" }}>
          <h1>Alianzas estratégicas</h1>

          <p>
            Disponemos de alianzas estratégicas con instituciones tanto locales
            como internacionales. Estas comprenden servicios de research, de
            acceso a plataformas internacionales de brokerage, que nos permiten
            acceder en tiempo real a lo que sucede en los principales mercados
            financieros del mundo y nos asisten en nuestro objetivo primario de
            brindar a nuestros clientes las mejores soluciones financieras.
          </p>
        </div>

        <div className="container-nosotros-3">
          <img
            src="https://tauruscapital.com.ar/wp-content/uploads/2023/05/Nosotros-AlianzasEstrategicas-Img.webp"
            alt="Error en la carga de la imagen"
          />
        </div>
      </div>

      <div className="container-nosotros-2">
        <div className="container-nosotros-3">
          <h1>Comunicate con nosotros</h1>

          <p>
            En Taurus Capital ofrecemos servicios de calidad y satisfacemos las
            necesidades de nuestros clientes. No dude en ponerse en contacto con
            nosotros a través de nuestro formulario de contacto. Estamos a su
            disposición para ofrecerle nuestra experiencia y conocimientos.
          </p>

          <button className="btn-contacto-nosotros" onClick={onClickContacto}>Contactanos</button>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
