import React, { useState } from "react";
import "./CheckoutForm.css";

function CheckoutForm() {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  function handleInputChange(event) {
    let inputName = event.target.name;
    let value = event.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputName] = value;
    setDataForm(newDataForm);
  }

  return (
    <div>
      <div className="formFlex">
        <input
          className="input"
          onChange={handleInputChange}
          name="name"
          type="text"
          value={dataForm.name}
          placeholder="Nombre"
          requerid
        />
        <input
          className="input"
          onChange={handleInputChange}
          name="phone"
          type="number"
          value={dataForm.phone}
          placeholder="Telefono"
        />
        <input
          className="input"
          onChange={handleInputChange}
          name="email"
          type="email"
          value={dataForm.email}
          placeholder="Email"
        />
      </div>
    </div>
  );
}


export default CheckoutForm  ;

