import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ArtGallery = () => {
  const loadedCategories = useLoaderData();
  const [categories, setCategories] = useState(loadedCategories);
  console.log(categories);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://art-and-craft-store-server-peach.vercel.app/allArts/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your user has been deleted.",
                icon: "success",
              });
              const remainingCategories = categories.filter(
                (category) => category._id !== _id
              );
              setCategories(remainingCategories);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-center font-bold">Products:{categories.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg font-bold text-[#FC8902]">
            <tr>
              <th></th>
              <th>Item Name</th>
              <th>Subcategory Name</th>
              <th>Image</th>
              <th></th>
              <th>Delete</th>
              <th>Update</th>
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
                  <img src={category.image} alt="" className="w-64 h-36" />
                </td>
                <td>
                  <Link
                    to={`/craftDetails/${category._id}`}
                    className="btn bg-[#FC8902] text-white"
                  >
                    View Details
                  </Link>
                </td>
                <td>
                  <span
                    onClick={() => handleDelete(category._id)}
                    className="btn"
                  >
                    X
                  </span>
                </td>
                <td>
                  <Link to={`/update-art/${category._id}`} className="btn">
                    Update Now
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
