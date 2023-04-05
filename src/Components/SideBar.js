import React from "react";
import { useContext } from "react";
import { SidebarContext } from "../PageContext/SidebarContext";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";
import { CartContext } from "../PageContext/CartContext";
//import { Link } from "react-router-dom";

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total,itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${isOpen ? " right-0" : " -right-full"}
  w-full fixed   bg-white h-full top-0 shadow-2xl md:w-[35vw] xl:m-w-[30vw]
  lg:px-[20vw] z-20 transition-all duration-300 px-4`}
    >
      <div className="flex items-center justify-between border-b py-6">
        <div className="uppercase text-sm font-semibold">shopping({itemAmount})</div>
        <div
          className="cursor-pointer w-8 h-8 flex justify-end items-center"
          onClick={handleClose}
        >
          <AiOutlineArrowRight className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col  gap-y-2 border-b">
        {cart.map((item) => {
          return <CartItem item={item} />;
        })}
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center w-full">
          <div className="uppercase font-semibold">
            Total:<span className="mr-2">${parseFloat(total).toFixed(2)}</span>
          </div>
          <div
            onClick={clearCart}
            className="text-xl bg-red-500 p-2 h-10 w-10 flex justify-center items-center rounded-sm
         text-white cursor-pointer"
          >
            <FiTrash2 />
          </div>
        </div>
        {/*<div className="flex justify-between items-center w-full py-4">
          <div>
            <Link to='/'  className="text-blue-500 hover:text-blue-700">View Cart</Link>
          </div>
          <div>
            <Link to='/'  className="text-blue-500 hover:text-blue-700">Checkout</Link>
          </div>
      </div>*/}
      </div>
    </div>
  );
};

export default SideBar;
