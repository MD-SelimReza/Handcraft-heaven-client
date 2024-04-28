import Cards from "./Cards";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <Cards />
      </div>
      <h2 className="text-3xl text-center">This is Home Page</h2>
    </div>
  );
};

export default Home;
