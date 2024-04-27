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
        fetch(`http://localhost:5000/allArts/${_id}`, {
          method: "DELETE",
        })
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
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Logged In</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category._id} className="hover">
                <th>2</th>
                <td>{category.item_name}</td>
                <td>{category.subcategory_name}</td>
                <td>{category.price}</td>
                <td onClick={() => handleDelete(category._id)} className="btn">
                  X
                </td>
                <Link to={`/update-art/${category._id}`} className="btn">
                  Update Now
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArtGallery;
