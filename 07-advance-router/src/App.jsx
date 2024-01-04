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
import HostVans from "./Pages/HostVans";
import HostVansPricing from "./Pages/HostVansPricing";
import HostVansPhotos from "./Pages/HostVansPhotos";
import HostVansLayout from "./Components/HostVansLayout";
import "./backend/server";
import "./App.css";
import HostVansDetails from "./Pages/HostVansDetails";

function App() {
  return (
    <div className="main-div third-bg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Host />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVansLayout/>}>
                <Route index element={<HostVansDetails/>} />
                <Route path="pricing" element={<HostVansPricing/>} />
                <Route path="photos" element={<HostVansPhotos/>} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
