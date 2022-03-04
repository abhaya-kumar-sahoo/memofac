import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import Loader from "./pages/components/Loader";
const App = lazy(() => import("./App"));

ReactDOM.render(
  <Suspense fallback={<Loader marginBottom="0%" marginTop="50%" />}>
    <App />
  </Suspense>,

  document.getElementById("root")
);
