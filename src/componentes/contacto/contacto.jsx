import React, { useState } from "react";
import "./contacto.css";
import Swal from "sweetalert2";

function Contacto() {
  const [state, setState] = useState({
    nombre: "",
    mail: "",
    servicio: "",
    mensaje: "",
  });
  const [stateScroll , setStateScroll] = useState(true)

  if(stateScroll === true){
    window.scroll(0, 0);
    setStateScroll(false)
  }

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (
      state.nombre === "" ||
      state.mail === "" ||
      state.servicio === "" ||
      state.mensaje === ""
    ) {
      Swal.fire({
        title: "Error!",
        text: "Completar todos los campos",
        icon: "error",
        confirmButtonText: "Ok",
      })
    } else {
      Swal.fire({
        title: "Successce!",
        text: "Mensaje enviado correctamente",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        setState({
          nombre: "",
          mail: "",
          servicio: "",
          mensaje: "",
        });
      });
    }
  };

  return (
    <div>
      <div className="body-contact">
        <section className="contact">
          <div className="contact-content">
            <h2 className="contact-h2">¡Contáctanos ahora!</h2>
            <p className="contact-p">
              Nuestro equipo de expertos está listo para ayudarte.
            </p>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-box">
                <div className="contact-icon">
                  <ion-icon name="location-outline"></ion-icon>
                </div>
                <div className="contact-text">
                  <h3 className="contact-h3">Direccion</h3>
                  <p className="contact-p-2">
                    Calle Siempre Viva 292 PB H - San Isidro
                  </p>
                </div>
              </div>

              <div className="contact-box">
                <div className="contact-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>
                <div className="contact-text">
                  <h3 className="contact-h3">Telefono</h3>
                  <p className="contact-p-2">115-596-7462</p>
                </div>
              </div>

              <div className="contact-box">
                <div className="contact-icon">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>
                <div className="contact-text">
                  <h3 className="contact-h3">Mail</h3>
                  <p className="contact-p-2">administracion@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form>
                <h2 className="contact-form-h2">Enviar Mensaje</h2>
              </form>

              <div>
                <div className="contact-input-box">
                  <input
                    type="text"
                    name="nombre"
                    required="required"
                    placeholder=" "
                    onChange={onChange}
                    value={state.nombre}
                  />
                  <span>Nombre</span>
                </div>

                <div className="contact-input-box">
                  <input
                    type="text"
                    name="mail"
                    required="required"
                    placeholder=" "
                    onChange={onChange}
                    value={state.mail}
                  />
                  <span>Mail</span>
                </div>

                <div className="contact-input-box">
                  <input
                    type="text"
                    name="servicio"
                    required="required"
                    placeholder=" "
                    onChange={onChange}
                    value={state.servicio}
                  />
                  <span>Servicio</span>
                </div>

                <div className="contact-input-box">
                  <textarea
                    required="required"
                    name="mensaje"
                    placeholder=" "
                    onChange={onChange}
                    value={state.mensaje}
                  ></textarea>
                  <span>Escribi tu mensaje...</span>
                </div>

                <div className="contact-input-box">
                  <input
                    type="submit"
                    name=""
                    value="Enviar"
                    className="btn-contacto"
                    onClick={onSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contacto;
