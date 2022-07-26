import "./App.css";
import ProductContainer from "./components/ProductContainer";

function App() {
  return (
    <div className="App">
      <div
        style={{ width: "100vw", height: "50vh", backgroundColor: "#003865" }}
      ></div>
      <div className="second_div"
        style={{ width: "100vw", height: "50vh", backgroundColor: "#D4F6CC" }}
      ></div>
      <ProductContainer/>
    </div>
  );
}

export default App;
