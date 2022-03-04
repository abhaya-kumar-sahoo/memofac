import React from "react";
import Logo from "../../assets/photos/MemofacLogo_1.jpeg";
import Loaders from "react-js-loader";

function Loader({marginBottom="25%",marginTop}) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#161616",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginTop:marginTop
      }}
    >

<div style={{marginBottom:marginBottom}}>
<Loaders
        type="box-rectangular"
        bgColor={"#303f9f"}
        title={<p style={{fontSize:15}}>Loading...</p>}
        color={"#4caf50"}
        size={70}

      />
</div>


    </div>
  );
}

export default Loader;
