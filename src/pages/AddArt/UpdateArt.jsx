import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateArt = () => {
  const getArt = useLoaderData();
  const {
    _id,
    item_name,
    subcategory_name,
    description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
    image,
  } = getArt;

  console.log(getArt);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stockStatus = form.stock_status.value;
    const image = form.image_url.value;

    const updatedArt = {
      item_name,
      subcategory_name,
      description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
      image,
    };

    fetch(
      `https://art-and-craft-store-server-peach.vercel.app/allArts/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedArt),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product updated successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div>
      <div className="lg:px-20 px-5 py-10">
        <div className="bg-[#F4F3F0] px-5 lg:px-20 py-10 space-y-5">
          <div className="lg:px-20 text-center">
            <h2 className="text-3xl font-bold mb-5">Update Your Product</h2>
          </div>
          <form onSubmit={handleUpdateProduct} className="space-y-5">
            <div className="lg:flex gap-5">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-black">
                    Item Name:
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter item name"
                  name="item_name"
                  defaultValue={item_name}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-black">
                    Subcategory Name:
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter subcategory name"
                  name="subcategory_name"
                  defaultValue={subcategory_name}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="lg:flex gap-5">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-black">
                    Short Description:
                  </span>
                </label>
                <textarea
                  name="description"
                  placeholder="Enter short description"
                  defaultValue={description}
                  rows="4"
                  cols="40"
                  className="input pt-3 input-bordered"
                  required
                ></textarea>
              </div>
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-black">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter price"
                  name="price"
                  defaultValue={price}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="lg:flex gap-5">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-black">
                    Rating
                  </span>
                </label>
                <input
                  type="number"
                  name="rating"
                  placeholder="Enter rating"
                  defaultValue={rating}
                  min="0"
                  max="5"
                  step="0"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-black">
                    Customization:
                  </span>
                </label>
                <select
                  className="input input-bordered"
                  id="customization"
                  name="customization"
                  defaultValue={customization}
                  required
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="lg:flex gap-5">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-black">
                    Processing Time:
                  </span>
                </label>
                <input
                  type="number"
                  name="processing_time"
                  placeholder="Enter processing time"
                  defaultValue={processing_time}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-black">
                    Stock Status:
                  </span>
                </label>
                <select
                  className="input input-bordered"
                  name="stock_status"
                  defaultValue={stockStatus}
                  required
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="In stock">In Stock</option>
                  <option value="Made to Order">Made to Order</option>
                </select>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-black">Image:</span>
              </label>
              <input
                type="text"
                placeholder="Enter image URL"
                name="image_url"
                defaultValue={image}
                className="input input-bordered"
                required
              />
            </div>
            <div className="w-full">
              <div className="form-control">
                <input
                  type="submit"
                  value="Update Now"
                  className="btn btn-block font-bold mt-5 btn-outline bg-[#D2B48C] text-black outline-[#63504C]"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateArt;
