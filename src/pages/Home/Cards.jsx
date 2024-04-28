import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Cards = () => {
  const loadedCategories = useLoaderData();
  const [categories, setCategories] = useState(loadedCategories);
  console.log(categories);
  return (
    <div className="lg:px-20 px-5 lg:my-24 md:my-20 my-10">
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
              src={category.image}
              alt=""
              className="w-full h-48 border mx-auto"
            />
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
    </div>
  );
};

export default Cards;
