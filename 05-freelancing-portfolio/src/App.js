import './App.css';
import FeaturesContainer from './components/FeaturesContainer/FeaturesContainer';
import HeroContainer from './components/HeroContainer/HeroContainer';
import LogosContainer from './components/LogosContainer/LogosContainer';
import ServicesContainer from './components/ServicesContainer/ServicesContainer';

function App() {
  return (
    <div className='main-container' >
    <HeroContainer/>
    <LogosContainer/>
    <ServicesContainer/>
    <FeaturesContainer/>
    </div>
  );
}

export default App;
