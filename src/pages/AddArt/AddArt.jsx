const AddArt = () => {
  return (
    <div>
      <div className="lg:px-20 px-5 py-10">
        <div className="bg-[#F4F3F0] px-5 lg:px-20 py-10 space-y-5">
          <div className="lg:px-20 text-center">
            <h2 className="text-3xl font-bold mb-5">
              Add Your Favorite Product
            </h2>
          </div>
          <form className="space-y-5">
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
                  name="item-name"
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
                  name="subcategory-name"
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
                  rows="4"
                  cols="40"
                  className="input input-bordered"
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
                  required
                >
                  <option value="" disabled selected>
                    Yes/No
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
                  name="rating"
                  placeholder="Enter processing time"
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
                    Stock Status:
                  </span>
                </label>
                <select
                  className="input input-bordered"
                  id="customization"
                  name="customization"
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
                name="image-url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="w-full">
              <div className="form-control">
                <input
                  type="submit"
                  value="Add Product"
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

export default AddArt;
