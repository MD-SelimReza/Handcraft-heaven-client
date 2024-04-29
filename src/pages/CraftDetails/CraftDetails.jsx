import { BiSolidUserBadge } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FcRating } from "react-icons/fc";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CraftDetails = () => {
  const crafts = useLoaderData();
  const { id } = useParams();
  const craft = crafts.find((craft) => craft._id === id);

  const {
    item_name,
    description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
    image,
  } = craft;
  return (
    <div className="flex gap-5 lg:flex-row flex-col text-black bg-white px-5 py-20">
      <div className="rounded-md w-full lg:w-3/4 bg-gray-200">
        <div className="relative">
          <img
            src={image}
            alt=""
            className="w-full h-[500px] rounded-t-md border border-[#FC8902] shadow-lg"
          />
          <span className="absolute top-5 right-5 text-white bg-[#FC8902] px-1 rounded-sm">
            {stockStatus}
          </span>
          <span className="absolute bottom-5 bg-[#FC8902] rounded-md py-1 px-2 inline-flex gap-2 items-center right-5 text-white">
            <span className="text-white">{rating}</span>
            <FcRating className="size-5" />
          </span>
        </div>
        <div className="p-5">
          <div className="text-2xl font-bold flex justify-between items-center">
            <h1 className="mb-5">{item_name}</h1>
            <p>
              Price: <span className="text-[#FC8902] ml-2"> {price} $</span>
            </p>
          </div>
          <p className="text-lg">{description}</p>
        </div>
        <div className="flex gap-10 pl-5 pb-5 font-bold">
          <p>
            Customization:{" "}
            <span className="text-[#FC8902] ml-2"> {customization}</span>
          </p>
          <p>
            Processing Time:{" "}
            <span className="text-[#FC8902] ml-2"> {processing_time} days</span>
          </p>
        </div>
      </div>
      <div className="lg:w-1/4 w-full flex flex-col gap-5">
        <div className="bg-[#FC8902] h-fit lg:flex-col md:flex-row flex gap-5 flex-col justify-between text-white p-5 rounded-lg">
          <div className="flex gap-5">
            <div className="bg-white size-12 text-[#FC8902] hover:text-black rounded-full">
              <FaLocationDot className="size-12 p-2" />
            </div>
            <div>
              <h1 className="text-2xl mb-5 uppercase">Visit Us</h1>
              <p className="mb-5">123 Main Street, Cityville, State, ZIP</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="bg-white size-12 text-[#FC8902] hover:text-black rounded-full">
              <BiSolidUserBadge className="size-12 p-2" />
            </div>
            <div>
              <h1 className="text-2xl mb-5 uppercase">Call Us</h1>
              <p className="mb-5">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="bg-white size-12 text-[#FC8902] hover:text-black rounded-full">
              <HiOutlineMail className="size-12 p-2" />
            </div>
            <div>
              <h1 className="text-2xl mb-5 uppercase">Mail Us</h1>
              <p className="mb-5">info@innovate.com</p>
            </div>
          </div>
        </div>
        <div className="bg-[#FC8902] text-white p-6 rounded-lg">
          <h1 className="text-3xl mb-5">Do You Need Any Help?</h1>
          <p className="mb-5">
            Here to assist you with any queries or tasks. Reach out for prompt
            and personalized support from our dedicated team at
            InnovateTechNetwork.
          </p>
          <Link className="bg-white text-[#FC8902] opacity-100 px-9 rounded-md py-3">
            Contact Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
