import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../imagenes/NIGIRI-LOGO-removebg-preview.png";
import "./footer.css";

function Footer() {
  return (
    <div className="body-footer">
      <div className="container-footer-1">
        <img src={Logo} alt="logo-empresa" />
      </div>

      <div className="line-footer"></div>

      <div className="container-footer-3">
        <div className="container-footer-2">
          <Link className="link-footer" to={"/"}>
            Home
          </Link>

          <Link className="link-footer" to={"/nosotros"}>
            Us
          </Link>

          <Link className="link-footer" to={"/carrera"}>
            Career
          </Link>

          <Link className="link-footer" to={"/contacto"}>
            Contact
          </Link>
        </div>

        <div className="container-footer-2">
          <a
            href="https://www.instagram.com"
            target="blank"
            className="link-footer"
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com"
            target="blank"
            className="link-footer"
          >
            Facebook
          </a>

          <a
            href="https://www.whatsapp.com"
            target="blank"
            className="link-footer"
          >
            Whatsapp
          </a>

          <a
            href="https://www.linkedin.com"
            target="blank"
            className="link-footer"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
