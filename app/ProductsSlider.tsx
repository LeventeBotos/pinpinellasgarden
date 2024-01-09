import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { FaStar, FaStarHalf } from "react-icons/fa";

const ProductsSlider = ({ items }: { items: any[] }) => {
  return (
    <div className="w-full relative gap-2 text-center flex flex-col">
      <h2>Recomended Products</h2>

      <div className=" flex-shrink-0  w-full z-40 h-72 md:h-36 overflow-x-auto flex flex-row gap-2">
        {items.map((item: any, index: number) => (
          <a
            target="_blank"
            href={item.url}
            className="bg-white flex-shrink-0 flex flex-col md:flex-row bg-none bg-opacity-10 hover:bg-opacity-20 transition-all ease-in-out duration-300 p-2 rounded-lg"
            key={index}
          >
            <div className="md:h-full h-1/2 flex flex-col justify-evenly w-56 md:w-auto p-1 bg-white rounded-lg">
              <img
                src={item.img}
                alt={`Image of ${item.name}`}
                loading="lazy"
                className=" h-full object-contain w-full "
              />
            </div>
            <div className=" w-56 flex h-1/2 md:h-full justify-evenly flex-col p-2 gap-1">
              <p className="font-bold overflow ">{item.name}</p>
              <p className="opacity-75">{item.price}</p>
              {/* <div className="flex self-center items-center flex-row gap-0.5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div> */}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductsSlider;
