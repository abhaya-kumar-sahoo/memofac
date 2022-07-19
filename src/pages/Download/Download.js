import React from "react";
import {useWindowSize } from "../ContactUs/ContactUs";
import PlayStoreLogo from "../../assets/logos/Playstore icon.png";

export default function Download() {
  const size = useWindowSize();
  return (
 
        <div className="download-page">
          <h1
            style={{ fontSize: size.width > 480 ? 80 : 27 }}
            className="download-title"
          >
            Download the app from
          </h1>
          {/* <img alt="appstore"
            src={AppStorelogo}
            className={size.width > 480 ? "mx-3" : "mx-1"}
            width={size.width > 480 ? 330 : 150}
          /> */}
          <a href="https://play.google.com/store/apps/details?id=com.memofac">
          <img alt="playstore"
            src={PlayStoreLogo}
            className="mx-2"
            width={size.width > 480 ? 310 : 120}
          /></a> 
        </div>

  );
};
