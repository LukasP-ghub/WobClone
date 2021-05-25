import React, { useState } from 'react';
import ProductModel from '../helpers/types/ProductModel';

type pricingType = {
  nominalPrice: number,
  actualPrice: number,
  totalDiscount: number,
}

type ProductContextObj = {
  productsInCart: ProductModel[],
  pricing: pricingType,
  addToCart: (product: ProductModel) => void,
  removeFromCart: (id: number) => void,
}

const CartContext = React.createContext<ProductContextObj>({
  productsInCart: [],
  pricing: {
    nominalPrice: 0,
    actualPrice: 0,
    totalDiscount: 0,
  },
  addToCart: () => { },
  removeFromCart: () => { },
});


export const CartContextProvider: React.FC = (props) => {
  const [productsInCart, setProductsInCart] = useState<ProductModel[]>([]);
  const [pricing, setPricing] = useState<pricingType>({
    nominalPrice: 0,
    actualPrice: 0,
    totalDiscount: 0,
  });

  const addToCart = (product: ProductModel) => {
    if (productsInCart.findIndex((element) => element.id === product.id) === -1) {
      setProductsInCart(prevArr => [...prevArr, product]);
      setPricing(prevObj => ({
        totalDiscount: 0,
        nominalPrice: Number((prevObj.nominalPrice + Number(product.price)).toFixed(2)),
        actualPrice: Number((prevObj.nominalPrice + Number(product.price)).toFixed(2)),
      }))
    }
  }

  const removeFromCart = (id: number) => {
    const productsInCartCopy = [...productsInCart];
    const index = productsInCartCopy.findIndex((element) => element.id === id);

    if (index > -1) {
      setPricing(prevObj => ({
        totalDiscount: 0,
        nominalPrice: Number((prevObj.nominalPrice - Number(productsInCartCopy[index].price)).toFixed(2)),
        actualPrice: Number((prevObj.nominalPrice - Number(productsInCartCopy[index].price)).toFixed(2)),
      }))
      productsInCartCopy.splice(index, 1);
      setProductsInCart([...productsInCartCopy]);
    }
  }

  const contextValue: ProductContextObj = {
    productsInCart: productsInCart,
    pricing: pricing,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  }

  return <CartContext.Provider value={contextValue}>
    {props.children}
  </CartContext.Provider>
}

export default CartContext;