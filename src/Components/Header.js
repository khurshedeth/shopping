import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { SidebarContext } from "../PageContext/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../PageContext/CartContext";
import { Link } from "react-router-dom";
import {GiHanger} from"react-icons/gi";

function Header() {
const [isActive,setIsActive]=useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY > 60 ? setIsActive(true):setIsActive(false);
  })
})




  return (
    <header className={`${isActive? ` bg-slate-100 py-4 shadow-md`:` bg-blue-500`} fixed w-full z-10 transition-all`}>
      <div className=" container flex justify-between mx-auto items-center h-full">
      <Link to={`/`}>
       <div className="">
       <GiHanger className=" text-5xl"/>
       </div>
      </Link>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" cursor-pointer flex relative max-w-[50px]"
      >
        <BsBag className="text-2xl" />
        <div
          className=" bg-red-400 absolute -right-2 
      -bottom-2 text-sm h-5 w-5 text-white flex justify-center items-center rounded-full"
        >
          {itemAmount}
        </div>
      </div>
      </div>
    </header>
  );
}

export default Header;
