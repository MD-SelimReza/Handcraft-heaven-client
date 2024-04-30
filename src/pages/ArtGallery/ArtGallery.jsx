import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const ArtGallery = () => {
  const loadedCategories = useLoaderData();
  const [categories, setCategories] = useState(loadedCategories);

  return (
    <div>
      <h2 className="text-center text-2xl uppercase my-10 font-bold text-[#FC8902]">
        Arts And Crafts Gallery
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-lg font-bold text-[#FC8902]">
            <tr>
              <th></th>
              <th>Item Name</th>
              <th>Subcategory Name</th>
              <th>Image</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, idx) => (
              <tr key={category._id} className="hover">
                <th>{idx + 1}.</th>
                <td>{category.item_name}</td>
                <td>{category.subcategory_name}</td>
                <td className="w-64 h-36">
                  {" "}
                  <img
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={category.item_name}
                    src={category.image}
                    alt=""
                    className="w-64 h-36"
                  />
                  <Tooltip id="my-tooltip" />
                </td>
                <td>
                  <Link
                    to={`/craftDetails/${category._id}`}
                    className="btn bg-[#FC8902] text-white"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArtGallery;
