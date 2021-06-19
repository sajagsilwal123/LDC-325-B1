import Hero from "./body/Hero";
import Cards from "./Card/Cards"
import MiddleBody from "../components/MiddleBody/MiddleBody"
import Testimonial from "../components/MiddleBody/Testimonial"


function Home() {
  return (
    <div className="App">
      <Hero />
      <MiddleBody/>
      <Cards/>
      <Testimonial />
    </div>
  );
}

export default Home;
