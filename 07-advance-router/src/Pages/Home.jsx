// import van from '../../assets/wedding-4297343_1920.jpg'
import Box from "../Components/Box";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-sub-container">
        <div className="home-headline-container">
          <h1 className="headline">
            Don&apos;t squeeze in a seadan when you could relax in a van.
          </h1>
          <p className="para">
            Our mission is to enliven your road trip with the perfect travel can
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch.
            <br />
            (Hitch costs extra)
          </p>
          <p className="para">
            Our team is full of vanlife enthusiasts who knwo firsthand the magic
            of touring the world of 4 wheels
          </p>
        </div>
        <div className="img"></div>
      </div>
      <Box>
        <h2 className="home-box-headline">
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <button className="btn black-bg black-border white-color">
          Explore our vans
        </button>
      </Box>
    </div>
  );
};

export default Home;
