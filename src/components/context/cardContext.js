import { React, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((x) => x.id === id);
  };

  const addItem = (data, qty) => {
    const newItem = { ...data, qty };
    if (isInCart(newItem.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const auxArray = [...cart];
      auxArray[productIndex].qty += qty;
      setCart(auxArray);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const emptyCart = () => {
    return setCart([]);
  };

  const deleteItem = (id) => {
    return setCart(cart.filter((x) => x.id !== id));
  };

  const getItemQty = () => {
    return cart.reduce((acc, x) => (acc += x.qty), 0);
  };

  const getItemPrice = () => {
    return cart.reduce((acc, x) => (acc += x.precio * x.qty), 0);
  };

  return (
    <Provider
      value={{
        cart,
        isInCart,
        addItem,
        emptyCart,
        deleteItem,
        getItemQty,
        getItemPrice,
      }}
    >
      {children}
    </Provider>
  );
};

export default MyProvider;
