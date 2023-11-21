import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./inicio.css";
import Contacto from "../contacto/contacto";

function Inicio() {
  window.scroll(0, 0);
  const navigate = useNavigate();

  const onClickNosotros = () => {
    navigate("/nosotros");
  };
  return (
    <div className="body-inicio">
      <header className="header">
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Taurus Capital</span>
            <span className="heading-primary-sub">
              Te acompañamos con tus Inversiones
            </span>
          </h1>

          <Link to="/contacto" className="btn">
            Contactanos
          </Link>
        </div>
      </header>

      <div className="container-1-inicio">
        <h1>Nuestros Servicios</h1>

        <p>
          Entendemos que cada inversor tiene necesidades y objetivos únicos. Por
          eso, ofrecemos una amplia variedad de servicios financieros
          personalizados para que puedan alcanzar sus metas.
        </p>
      </div>

      <div className="contaner-inicio-2">
        <div className="container-inicio-3">
          <h3>Investment</h3>
          <p>Brindamos asesoramiento personalizado de banca privada.</p>
          <p>
            Somos referentes del mercado de renta fija local, especialistas en
            seleccionar fondos comunes de inversion.
          </p>
        </div>

        <div className="container-inicio-3">
          <img
            src="https://paytmblogcdn.paytm.com/wp-content/uploads/2023/09/Blog_Paytm_What-Is-a-Long-Term-Investment-and-What-Are-Its-Benefits.jpg"
            alt="Error en la carga de la imagen"
          />
        </div>
      </div>

      <div className="contaner-inicio-2">
        <div className="container-inicio-3">
          <img
            src="https://kdg.co.in/images/newimg/corporate_main.jpg"
            alt="Error en la carga de la imagen"
          />
        </div>

        <div className="container-inicio-3">
          <h3>Corporate finance</h3>
          <p>
            Somos referentes del mercado local en la estructuracion de
            financiamiento de corto, mediano y largo plazo para cada industria y
            tamaño de empresa.
          </p>
        </div>
      </div>

      <div className="contaner-inicio-2">
        <div className="container-inicio-3">
          <h3>Financial advisory</h3>
          <p>
            Aplicando nuestro distintivo Modelo de Atención nuestro equipo
            formado por mas de 50 profesionales comerciales, se enfoca en
            asesorar con eficiencia a nuestros clientes para el diseño de sus
            portfolios de inversión, financiamiento a medida, soluciones
            operativas
          </p>
        </div>

        <div className="container-inicio-3">
          <img
            src="https://www.ilf.com/wp-content/uploads/2016/09/pic_finanzierungsberatung_header-776x354.jpg"
            alt="Error en la carga de la imagen"
          />
        </div>
      </div>

      <div className="contaner-inicio-2">
        <div className="container-inicio-3">
          <img
            src="https://media.bizj.us/view/img/10784953/howtofinances*1200xx4812-2717-0-0.jpg"
            alt="Error en la carga de la imagen"
          />
        </div>

        <div className="container-inicio-3">
          <h3>Strategies</h3>
          <p>
            Un conocimiento del total de las herramientas financieras juntos con
            los vehículos necesarios nos permite en la práctica obtener el
            alcance absoluto en materia de soluciones financieras a media las
            cuales trascienden lo estrictamente bursátil
          </p>
        </div>
      </div>

      <div className="container-inicio-4">
        <h1>Nosotros</h1>

        <p>
          Somos una empresa comprometida, dedicada a conocer y entender las
          necesidades de nuestros clientes con el objetivo de crear valor, a
          través de relaciones basadas en la confianza y respeto mutuo, con
          profesionalismo y excelencia en calidad de servicio. Hoy ofrecemos una
          diversidad de soluciones financieras para individuos, empresas e
          instituciones.
        </p>

        <button onClick={onClickNosotros}>Ver Mas</button>

        <img
          src="https://tauruscapital.com.ar/wp-content/uploads/2023/05/Home-Nosotros-Img.webp"
          alt="Error en la carga de la imagen"
        />
      </div>

      <div className="container-inicio-5">
        <div className="card-container-inicio">
          <h1>Informe Semanal</h1>

          <p>
            Suscribete y recibi actualizaciones diarias sobre el mercado de
            capitales, análisis exclusivos y consejos financieros de nuestros
            expertos.
          </p>

          <div className="container-input">
            <input placeholder="Email" />
            <button>Suscribirme</button>
          </div>
        </div>
      </div>

      <Contacto />
    </div>
  );
}

export default Inicio;
