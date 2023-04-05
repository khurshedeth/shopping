
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "../PageContext/CartContext";
import { useContext } from "react";

function Product({ product }) {
  const { id, category, title, price, image } = product;
  console.log(product);
 const{addToCart}=useContext(CartContext);
 

  return (
    <div>
      <div className="border border-gray-200 h-[300px] mb-4 relative overflow-hidden group transition rounded-xl">
        <div className="w-full h-full flex justify-center items-center">
          {/*image*/}
          <div className="max-[200px] mx-auto flex justify-center items-center">
            <img
              className=" max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </div>
        </div>
        <div
          className=" absolute top-3 right-0 mb-4 p-2  flex flex-col justify-center
         items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:right-5 "
        >
          <button onClick={()=>addToCart(product,id)}>
            <div
              className=" flex justify-center items-center
            text-black w-6 h-6 bg-lime-400/30 rounded-md"
            >
              <AiOutlinePlus className=" text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-6 h-6 bg-white flex justify-center items-center
           text-primary drop-shadow-xl rounded-lg"
          >
            <AiOutlineEye />
          </Link>
        </div>
      </div>
      {/*category price and description*/}
      <div>
        <div className=" text-sm capitalize text-gray-600 font-primary">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className=" font-semibold mb-1 ">{title}</h2>
        </Link>
        <div className=" font-semibold">${price}</div>
      </div>
    </div>
  );
}

export default Product;
