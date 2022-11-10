import React from "react";
import Button from 'react-bootstrap/Button';
import "./ItemCount.css"


const ItemCount = ({ qty, setQty, onAdd, stock }) => {
  const handlerMinus = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const handlerPlus = () => {
    if (qty < stock) {
      setQty(qty + 1);
    }
  };


  return (
    <div>
     
      <div className="count">
      <Button variant="light" className="btnCount" onClick={handlerMinus}>-</Button>{' '}
       
      <span className="span-count">{qty}</span>
        
        <Button variant="light" className="btnCount" onClick={handlerPlus}>+</Button>{' '}
        
      </div>
      <Button variant="success" className="agregar" onClick={() =>{onAdd()}} >Agregar carrito</Button>{' '}

    
    </div>
  );
};

export default ItemCount;
