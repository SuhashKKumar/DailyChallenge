import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans";
import VanDetail from "./Pages/VanDetail";
import Layout from "./Components/Layout";
import Host from "./Pages/Host";
import Income from "./Pages/Income";
import Reviews from "./Pages/Reviews";
import HostLayout from "./Components/HostLayout";
import "./backend/server";
import "./App.css";

function App() {
  return (
    <div className="main-div third-bg">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
            <Route element={<HostLayout />}>
              <Route path="/host" element={<Host />} />
              <Route path="/host/income" element={<Income />} />
              <Route path="/host/reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
