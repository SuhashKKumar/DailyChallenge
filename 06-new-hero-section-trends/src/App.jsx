import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import SecondaryHero from "./Components/SecondaryHero/SecondaryHero";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <hr className="horizontal-line" />
      <HeroSection/>
      <SecondaryHero/>
    </div>
  );
}

export default App;
