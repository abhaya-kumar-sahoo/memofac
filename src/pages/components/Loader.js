import React from "react";
import Loaders from "react-js-loader";
import { useWindowSize } from ".";

function Loader({ marginLBottom, paddingTop, marginLTop }) {
  const size = useWindowSize();
  return (
    <div
      style={{
        height: size.height,
        width: size.width,
        backgroundColor: "#161616",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        paddingTop: paddingTop,
      }}
    >
      <div style={{ marginBottom: marginLBottom, marginTop: marginLTop }}>
        <Loaders
          type="box-rectangular"
          bgColor={"#303f9f"}
          title={<p style={{ fontSize: 15 }}>Loading...</p>}
          color={"#4caf50"}
          size={70}
        />
      </div>
    </div>
  );
}

export default Loader;
