import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SocialMedia } from "./pages/components/SocialMedia";
import Loader from "./pages/components/Loader";
const Home = lazy(() => import("./pages/Home"));

const Privacy = lazy(() => import("./pages/Privacy Policy/Privacy"));
const About = lazy(() => import("./pages/About/About"));
const Download = lazy(() => import("./pages/Download/Download"));

const NavigationBar= lazy(()=> import  ("./pages/components/Navbar"))

function App() {

  
  return (
    <div
     

    >
      <Router>
        
        <Suspense fallback={<Loader marginTop={"20%"} />}>
        <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/download" element={<Download />} />
            <Route path="/about" element={<About />} />
            <Route path="/socialMedia" element={<SocialMedia />} />

          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
