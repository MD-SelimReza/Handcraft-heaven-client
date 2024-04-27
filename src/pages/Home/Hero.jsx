import heroImg1 from "../../../public/img1.jpg";
import heroImg2 from "../../../public/img2.jpg";
import heroImg3 from "../../../public/img3.jpg";
import { EffectFade, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Swiper
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {/* slide 1 */}
        <SwiperSlide>
          <div
            className="hero min-h-[calc(100vh-70px)]"
            style={{
              backgroundImage: "url(" + heroImg1 + ")",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold uppercase">
                  Handcrafted just for you
                </h1>
                <p className="mb-5 text-lg">
                  Welcome to Art&CraftGallery, a jaunty little theme we made
                  specifically for your new arts & crafts or handicraft website!
                  We made sure Art&CraftGallery got absolutely everything
                  covered
                </p>
                <div className="lg:mt-16 mt-10">
                  <Link
                    to="/"
                    className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
                  >
                    <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                    <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                      <span className="relative text-white">Our Services</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide>
          <div
            className="hero min-h-[calc(100vh-70px)]"
            style={{
              backgroundImage: "url(" + heroImg2 + ")",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold uppercase">
                  Building new experiences
                </h1>
                <p className="mb-5 text-lg">
                  Art&CraftGallery comes with a captivating template collection,
                  including twelve stunning and completely flexible homepage
                  layouts which can be on your new site this very day!
                </p>
                <div className="lg:mt-16 mt-10">
                  <Link
                    to="/"
                    className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
                  >
                    <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                    <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                      <span className="relative text-white">Our Services</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
          <div
            className="hero min-h-[calc(100vh-70px)]"
            style={{
              backgroundImage: "url(" + heroImg3 + ")",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold uppercase">
                  Dedicated to what we do
                </h1>
                <p className="mb-5 text-lg">
                  With Art&CraftGallery you can get your site up and running in
                  no time. Importing the complete theme demo content is super
                  quick, and all it requires is just a single click of your
                  mouse.
                </p>
                <div className="lg:mt-16 mt-10">
                  <Link
                    to="/"
                    className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
                  >
                    <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                    <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                      <span className="relative text-white">Our Services</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
