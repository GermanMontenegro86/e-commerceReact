import React from "react";
import Item from "../Item/Item";
import "./itemList.css"

export default function ItemList({ data }) {
  return (
    <div className="carta">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <Item
              id={item.id}
              nombre={item.nombre}
              imagen={item.imagen}
              precio={item.precio}
              stock={item.stock}
              categoria={item.categoria}
            />
          </div>
        );
      })}
    </div>
  );
}
