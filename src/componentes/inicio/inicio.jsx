import React from "react";
import { Link } from "react-router-dom";
import "./inicio.css";

function Inicio() {
  window.scroll(0, 0);
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
    </div>
  );
}

export default Inicio;
