import Carousel from "./components/carousel";
import Header from "./components/header";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Reference from "./components/reference";
import Services from "./components/services-provided";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Portfolio />
      <Carousel />
      <Reference />
      <Services />
    </div>
  );
}
