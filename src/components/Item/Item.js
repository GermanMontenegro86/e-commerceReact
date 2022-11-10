import React from "react";
import "./Item.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";



function Item(props) {
  let { id, nombre, imagen, precio, stock,categoria } = props;
  


  return (
    <div className="carta">
         <article className="card">
        <h5> {`# ${id}`} </h5>
        <h6> {nombre} </h6>
        <img src={imagen} alt={`Nombre del producto ${nombre}`} />
        <div>
          <p className="precio">{`Precio $${precio}`}</p>
        </div>
        <> {`Stock ${stock}`} </>
        <> {categoria} </>
    <Link to={`/articulo/${id}`}>
    <Button variant="primary">
            Ver detalles
          </Button>
    </Link>
       
      
      </article>
     
       
    </div>
  );
}

export default Item;
