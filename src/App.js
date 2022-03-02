import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Privacy from "./pages/Privacy Policy/Privacy";
import { About } from "./pages/About/About";
import { Download } from "./pages/Download/Download";
import { useWindowSize } from "./pages/components";
import NavigationBar from "./pages/components/Navbar";
function App() {
  const size = useWindowSize();
  return (
    <div
      className="home"
      style={{
        height: size.height,
        width: size.width,
      }}
    >
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/download" element={<Download />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// "homepage": "https://abhaya-kumar-sahoo.github.io/memofac",
