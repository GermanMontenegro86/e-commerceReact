import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="mt-5 p-5 container-fluid footer">
        <div className="row p-2 d-flex text-white justify-content-between">
          <div className="col-lg-2 col-sm   ">
            <img src="/img/logo.jpg" alt="" />
          </div>
          <div className="col-lg-2 col-sm mb-3">
            <h5>Navegacion</h5>
            <p>Usted esta en una pagina demo</p>
          </div>

          <div className="col-lg-2 col-sm">
            <h5>Redes</h5>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>

          <div className="col-lg-2 col-sm">
            <h5>Contacto</h5>
            <p>WhatsApp</p>
            <p>PescaMEJOR@prueba.com</p>
          </div>
        </div>
        <div className="col-lg-6 mx-auto">
          <p className="text-decoration-none text-white text-center">
            &copy; G. Montenegro 2022
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
