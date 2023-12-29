import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="main-div third-bg-color" >
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
    </div>
    );
}

export default App;
