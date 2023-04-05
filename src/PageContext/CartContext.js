import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const[itemAmount,setItemAmount]=useState(0);
  const[total,setTotal]=useState(0);


// total amount 
 useEffect(()=>{
  const total=cart.reduce((accumalator,currentItem)=>{
    return accumalator+ currentItem.price +currentItem.amount;
  },0)
  setTotal(total)
 },[cart])





useEffect(()=>{
  if(cart){
    const amount= cart.reduce((accumalator,currentItem)=>{
    return accumalator+  currentItem.amount;
    },0)
    setItemAmount(amount);
  }
},[cart])

  //add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const CartItem = cart.find((item) => {
      return item.id === id;
    });

    // if cartitem is already in cart
    if (CartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: CartItem.amount + 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  //Remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]);
  };

  //Increase Amount
  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };

  // Decrease Amount
  const decreaseAmount = (id) => {
    const cartitem = cart.find((item) => {
      return item.id === id;
    });
    if (cartitem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartitem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartitem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        total,
        itemAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
