import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cardContext";
import { Link } from "react-router-dom";
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";



export default function CartWidget() {
  
  const {getItemQty} = useContext(CartContext)

  return (
    <div className="Carrito">
      
     <Link className="link-icono-cart" to="Cart"><FontAwesomeIcon className="icono-cart" icon={faCartShopping} /></Link>
      <span className="ms-2">{getItemQty()}</span>
    </div>
  );
}
