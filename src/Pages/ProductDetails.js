import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../PageContext/CartContext";
import { ProductContext } from "../PageContext/ProductContext";

function ProductDetails() {
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className=" h-screen flex justify-center items-center">
        Data Loading...
      </section>
    );
  }

  const {  title, price, image, description } = product;

  return (
    <section className=" pt-32 pb-12 lg:py-32 h-screen items-center">
      <div className=" container mx-auto ">
        <div className=" flex flex-col lg:flex-row items-center">
          <div className=" flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img src={image} alt="" className=" max-w-[200px] lg:max-w-sm" />
          </div>
          <div className=" flex-1 text-center  lg:text-left ">
          <h1 className="  font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
          <div className=" text-xl mb-6 text-red-400 font-medium"> ${price}</div>
          <p className=" mb-8"> {description}</p>
          <button className=" bg-black p-2 text-white px-8 rounded-sm" onClick={()=>addToCart(product,product.id)}>Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
