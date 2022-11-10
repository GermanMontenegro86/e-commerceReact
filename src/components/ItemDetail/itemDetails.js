import React from "react";
import ItemCount from "../itemCount/ItemCount";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/cardContext";
import "../ItemDetail/itemDetails.css"


function ItemDetail({ data }) {
  const [qty, setQty] = useState(1);

  const { addItem } = useContext(CartContext);

  const onAdd = () => {
    addItem(data, qty);
  };
  return (
    <div className="container div-card card mt-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={data.imagen}
            className=" imge img-fluid rounded-start mt-3"
            alt="card img"
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body ">
            <h3 className="card-tittle text-center">{data.nombre}</h3>
            <p className="card-text text-center">{data.detail} </p>
            <h4 className="text-center">$ {data.precio}</h4>
            <p className="text-center">Stock disponible: {data.stock} </p>
            <div>
              <ItemCount qty={qty}
                setQty={setQty}
                stock={data.stock}
                onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
