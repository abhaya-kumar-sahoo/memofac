import React, { Suspense, lazy } from "react";
import BG from "./assets/photos/Hotels.png";
import ReactDOM from "react-dom";
import Loader from "./pages/components/Loader";
import { useWindowSize } from "./pages/components";

const App = lazy(() => import("./App"));

ReactDOM.render(
  <div
    style={{
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundImage: `url(${BG})`,
      backgroundSize: "cover",
      backgroundColor:"#161616"
    }}
  >
    <Suspense fallback={<Loader marginBottom="0%" marginTop="50%" />}>
      <App />
    </Suspense>
  </div>,
  document.getElementById("root")
);
