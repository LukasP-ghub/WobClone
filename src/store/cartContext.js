import React, { useState } from 'react';

const CartContext = React.createContext({
  productsInCart: [],
  addToCart: () => { },
  removeFromCart: () => { },
});


export const CartContextProvider = (props) => {
  const [productsInCart, setProductsInCart] = useState([]);

  const addToCart = (product) => {
    if (productsInCart.findIndex((element) => element.id === product.id) === -1) {
      setProductsInCart(prevArr => [...prevArr, product]);
    }
  }

  const removeFromCart = (id) => {
    const index = productsInCart.findIndex((element) => element.id === id);
    if (index > -1) {
      productsInCart.splice(index, 1);
      setProductsInCart([...productsInCart]);
    }
  }

  return <CartContext.Provider value={{
    productsInCart: productsInCart,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  }}>
    {props.children}
  </CartContext.Provider>
}

export default CartContext;