import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../imagenes/NIGIRI-LOGO-removebg-preview.png";
import "./header.css";

function Header() {
  const [openClose, setOpenClose] = useState(false);

  const onClickOpenClose = () => {
    const divResponsive = document.getElementById("responsive-div-header");

    if (openClose === false) {
      divResponsive.style.display = "grid";
      setOpenClose(true);
    } else {
      setOpenClose(false);
      divResponsive.style.display = "none";
    }
  };

  return (
    <div className="body-header">
      <div className="contaner-header-1">
        <img src={Logo} alt="logo-empresa" />
      </div>

      <div className="contaner-header-2">
        <Link className="link-header" to={"/"}>
          Home
        </Link>

        <Link className="link-header" to={"/nosotros"}>
          Us
        </Link>

        <Link className="link-header" to={"/carrera"}>
          Career
        </Link>

        <Link className="link-header" to={"/contacto"}>
          Contact
        </Link>
      </div>

      <div className="container-header-3">
        {openClose === false ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#f2f2f2"
            class="bi bi-filter"
            viewBox="0 0 16 16"
            onClick={onClickOpenClose}
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#f2f2f2"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
            onClick={onClickOpenClose}
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        )}
      </div>

      <div
        id="responsive-div-header"
        className="responsive-header"
        onClick={onClickOpenClose}
      >
        <Link className="link-header-responsive" to={"/"}>
          Home
        </Link>

        <Link className="link-header-responsive" to={"/nosotros"}>
          Us
        </Link>

        <Link className="link-header-responsive" to={"/carrera"}>
          Career
        </Link>

        <Link className="link-header-responsive" to={"/contacto"}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
