import img1 from "../../assets/1.webp";
import img2 from "../../assets/2.webp";
import img3 from "../../assets/3.webp";
import img4 from "../../assets/4.webp";
import img5 from "../../assets/5.webp";

const Choose = () => {
  return (
    <>
      <div className="text-center md:text-left mt-20">
        <p className="text-[32px] lg:text-[40px] font-semibold">
          Why People Choose Us
        </p>
      </div>
      {/* Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
        <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
          <img src={img1} alt="" />
          <p className="font-semibold text-lg text-center dark:text-white">
            Fast & Secure <br />
            Delivery
          </p>
        </div>
        <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
          <img src={img2} alt="" />
          <p className="font-semibold text-lg text-center dark:text-white">
            Money Back <br />
            Guarantee
          </p>
        </div>
        <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
          <img src={img3} alt="" />
          <p className="font-semibold text-lg text-center dark:text-white">
            24 Hour Return <br />
            Policy
          </p>
        </div>
        <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
          <img src={img4} alt="" />
          <p className="font-semibold text-lg text-center dark:text-white">
            Pro Quality <br />
            Support
          </p>
        </div>
        <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
          <img src={img5} alt="" />
          <p className="font-semibold text-lg text-center dark:text-white">
            Next Level Pro <br />
            Quality
          </p>
        </div>
      </div>
    </>
  );
};

export default Choose;
