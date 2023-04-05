import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../PageContext/CartContext";

function CartItem({ item }) {
  const { image, title, id, amount, price } = item;

  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  return (
    <div
      className="flex gap-x-4 py-2 w-full lg:py-6 border-b 
     border-gray-200 font-light text-gray-500 "
    >
      <div className=" w-full flex items-center gap-x-4 ">
        {/*image*/}
        <Link to={`/product/${id}`}>
          <img src={image} className="max-w-[80px]" alt="" />
        </Link>

        <div className=" w-full flex flex-col">
          {/* title and remove icon*/}
          <div className=" flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className=" text-sm font-medium uppercase max-w-[240px]
             text-gray-900 hover:underline"
            >
              {title}
            </Link>
            <div
              onClick={() => removeFromCart(id)}
              className=" text-2xl cursor-pointer"
            >
              <IoMdClose className=" text-gray-500 hover:text-red-600 transition cursor" />
            </div>
          </div>
          <div className=" bg-slate-100 flex gap-x-2 text-sm h-[36px]">
            {/*quality*/}
            <div
              className=" flex flex-1 max-w-[100px] bg-slate-100 items-center h-full
             border text-slate-900 font-medium "
            >
              {/*minus icon*/}
              <div
                onClick={() => decreaseAmount(id)}
                className=" flex flex-1  justify-center item center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              {/* amount*/}
              <div className=" flex justify-center items-center h-full px-2 ">
                {amount}
              </div>
              {/*plus icon*/}
              <div
                onClick={() => increaseAmount(id)}
                className=" flex flex-1 justify-center item center cursor-pointer "
              >
                <IoMdAdd />
              </div>
            </div>

            <div className=" flex flex-1 items-center  justify-center">
              {" "}
              ${price}
            </div>
            <div
              className=" flex flex-1 justify-end  items-center
                text-slate-800 font-medium"
            >{`$  ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
