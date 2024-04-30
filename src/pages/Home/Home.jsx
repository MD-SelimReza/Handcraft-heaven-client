import Cards from "./Cards";
import Choose from "./Choose";
import Hero from "./Hero";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <div className="py-24 mt-20 bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#0F172A] dark:from-10% dark:via-[#0F172A] dark:via-30% dark:to-[#0F172A]">
          <Testimonial />
        </div>
        <div className="lg:px-16 px-5 lg:my-20 md:my-16 my-10">
          <Choose />
        </div>
      </div>
    </div>
  );
};

export default Home;
