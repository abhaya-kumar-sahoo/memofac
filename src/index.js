import React, { Suspense, lazy } from "react";
// import BG from "./assets/photos/Hotels.png";
import ReactDOM from "react-dom";
import Loader from "./pages/components/Loader";


const App = lazy(() => import("./App"));

ReactDOM.render(
  <div
    style={{
      width: window.innerWidth,
      // height: window.innerHeight,
      // backgroundImage: `url(${BG})`,
      backgroundSize: "cover",
      backgroundColor:"#000000"
    }}
  >
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </div>,
  document.getElementById("root")
);
