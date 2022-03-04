import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useWindowSize } from "./pages/components";
import { NavigationBar } from "./pages/components/Navbar";
import BG from "./assets/photos/Hotels.png";
import Loader from "./pages/components/Loader";
const Home = lazy(() => import("./pages/Home"));

const Privacy = lazy(() => import("./pages/Privacy Policy/Privacy"));
const About = lazy(() => import("./pages/About/About"));
const Download = lazy(() => import("./pages/Download/Download"));
//const useWindowSize =lazy(()=> import ("./pages/components"))

// const NavigationBar= lazy(()=> import  ("./pages/components/Navbar"))

function App() {
  const size = useWindowSize();
  return (
    <div
      
      // style={{
      //   height: size.height,
      //   width: size.width,
      //   backgroundImage:`url(${BG})`,
      //   backgroundSize:"cover",
      // }}
    >
      <Router>
        <NavigationBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/download" element={<Download />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
