import './App.css';
import FAQsContainer from './components/FAQsContainer/FAQsContainer';
import FeaturesContainer from './components/FeaturesContainer/FeaturesContainer';
import Footer from './components/Footer/Footer';
import HeroContainer from './components/HeroContainer/HeroContainer';
import LogosContainer from './components/LogosContainer/LogosContainer';
import PricingContainer from './components/PricingContainer/PricingContainer';
import ServicesContainer from './components/ServicesContainer/ServicesContainer';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className='main-container' >
    <HeroContainer/>
    <LogosContainer/>
    <ServicesContainer/>
    <FeaturesContainer/>
    <Testimonials/>
    <PricingContainer/>
    <FAQsContainer/>
    <Footer/>
    </div>
  );
}

export default App;
