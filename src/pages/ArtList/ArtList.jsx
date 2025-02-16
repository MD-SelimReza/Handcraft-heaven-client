import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const ArtList = () => {
  const { user } = useContext(AuthContext) || {};
  const [crafts, setCrafts] = useState([]);
  useEffect(() => {
    fetch(
      `https://art-and-craft-store-server-peach.vercel.app/allCrafts/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
      });
  }, [user]);

  const handleFilter = (findText) => {
    fetch(
      `https://art-and-craft-store-server-peach.vercel.app/allCrafts/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filterArts = crafts.filter(
          (craft) => craft.customization === findText
        );
        setCrafts(filterArts);
      });
  };

  const handleDelete = (_id) => {
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
          `https://art-and-craft-store-server-peach.vercel.app/allCrafts/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your user has been deleted.",
                icon: "success",
              });
              const remainingCraft = crafts.filter(
                (craft) => craft._id !== _id
              );
              setCrafts(remainingCraft);
            }
          });
      }
    });
  };

  return (
    <div className="lg:px-10 px-5 my-10">
      <div className="flex justify-between mb-10">
        <h2 className="text-3xl text-[#FC8902]">My Art and Craft List</h2>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#FC8902] text-white text-lg font-bold"
          >
            Filter by customizable
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleFilter("yes")}>
              <a>Yes</a>
            </li>
            <li onClick={() => handleFilter("no")}>
              <a>No</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
        {crafts.map((craft) => (
          <div
            key={craft._id}
            className="flex lg:flex-row flex-col gap-5 p-5 lg:items-center border shadow-lg"
          >
            <div>
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={craft.item_name}
                src={craft.image}
                alt=""
                className="lg:w-64 w-full h-44"
              />
              <Tooltip id="my-tooltip" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">{craft.item_name}</h2>
              <div className="flex justify-between">
                <p className="text-lg font-bold">
                  Price:{" "}
                  <span className="text-[#FC8902]"> {craft.price} $</span>
                </p>
                <span className="bg-[#FC8902] rounded-md py-1 px-2 inline-flex gap-2 items-center text-white">
                  <span className="text-white">{craft.rating}</span>
                  <FcRating className="size-5" />
                </span>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">Customization:</p>
                <p className="uppercase">
                  <span className="text-[#FC8902]">{craft.customization}</span>
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">Stock:</p>
                <p>
                  <span className="text-[#FC8902]">{craft.stockStatus}</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleDelete(craft._id)}
                  className="btn bg-[#FC8902] text-white"
                >
                  Delete
                </button>
                <Link
                  to={`/update-art/${craft._id}`}
                  className="btn bg-[#FC8902] text-white"
                >
                  Update Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtList;
