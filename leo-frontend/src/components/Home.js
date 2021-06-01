import Hero from "./body/Hero";
import Cards from "./Card/Cards"
import MiddleBody from "../components/MiddleBody/MiddleBody"


function Home() {
  return (
    <div className="App">
      <Hero />
      <MiddleBody/>
      <Cards/>
    </div>
  );
}

export default Home;
