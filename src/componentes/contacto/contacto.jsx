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
  const [stateScroll, setStateScroll] = useState(true);

  if (stateScroll === true) {
    window.scroll(0, 0);
    setStateScroll(false);
  }

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

    console.log(state);
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
      });
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
            <h2 className="contact-h2">¡Contact us now!</h2>
            <p className="contact-p">
              Our team of experts is ready to help you.
            </p>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-box">
                <div className="contact-icon">
                  <ion-icon name="location-outline"></ion-icon>
                </div>
                <div className="contact-text">
                  <h3 className="contact-h3">Address</h3>
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
                  <h3 className="contact-h3">Phone</h3>
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
                <h2 className="contact-form-h2">Send Message</h2>
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
                  <span>Name</span>
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
                  <span>Service</span>
                </div>

                <div className="contact-input-box">
                  <textarea
                    required="required"
                    name="mensaje"
                    placeholder=" "
                    onChange={onChange}
                    value={state.mensaje}
                  ></textarea>
                  <span>Write your message...</span>
                </div>

                <div className="contact-input-box">
                  <input
                    type="submit"
                    name=""
                    value="Send"
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
