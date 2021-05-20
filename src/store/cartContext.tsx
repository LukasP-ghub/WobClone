import React, { useState } from 'react';
import ProductModel from '../helpers/types/ProductModel';

type ProductContextObj = {
  productsInCart: ProductModel[],
  addToCart: (product: ProductModel) => void,
  removeFromCart: (id: number) => void,
}

const CartContext = React.createContext<ProductContextObj>({
  productsInCart: [],
  addToCart: () => { },
  removeFromCart: () => { },
});


export const CartContextProvider: React.FC = (props) => {
  const [productsInCart, setProductsInCart] = useState<ProductModel[]>([]);

  const addToCart = (product: ProductModel) => {
    if (productsInCart.findIndex((element) => element.id === product.id) === -1) {
      setProductsInCart(prevArr => [...prevArr, product]);
    }
  }

  const removeFromCart = (id: number) => {
    const index = productsInCart.findIndex((element) => element.id === id);
    if (index > -1) {
      productsInCart.splice(index, 1);
      setProductsInCart([...productsInCart]);
    }
  }

  const contextValue: ProductContextObj = {
    productsInCart: productsInCart,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  }

  return <CartContext.Provider value={contextValue}>
    {props.children}
  </CartContext.Provider>
}

export default CartContext;