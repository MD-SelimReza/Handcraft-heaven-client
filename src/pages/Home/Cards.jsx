import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Cards = () => {
  const loadedCategories = useLoaderData();
  const [categories, setCategories] = useState(loadedCategories);
  return (
    <div className="lg:px-16 px-5 lg:my-20 md:my-16 my-10">
      <h2 className="lg:text-3xl text-2xl mb-10 lg:mb-16 text-center font-bold uppercase text-[#FC8902]">
        Most popular products
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {categories.slice(0, 6).map((category) => (
          <div
            key={category._id}
            className="border flex flex-col shadow-lg rounded-lg p-5"
          >
            <img
              data-tooltip-id="my-tooltip"
              data-tooltip-content={category.item_name}
              src={category.image}
              alt=""
              className="w-full h-48 border mx-auto relative"
            />
            <Tooltip id="my-tooltip" />
            <h3 className="text-xl mt-4 text-[#FC8902] font-bold">
              {category.item_name}
            </h3>
            <p className="text-lg mt-5 h-20">{category.description}</p>
            <div className="text-right">
              <Link
                to={`/craftDetails/${category._id}`}
                className="btn bg-[#FC8902] text-white"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link
          to="/show-art"
          className="btn px-10 mt-16 bg-[#FC8902] text-white"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default Cards;
