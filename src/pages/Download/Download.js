import React from "react";
import { StaticHome, useWindowSize } from "../components";
import PlayStoreLogo from "../../assets/logos/Playstore icon.png";
import AppStorelogo from "../../assets/logos/Appstore icon.png";

export const Download = () => {
  const size = useWindowSize();
  return (
    <StaticHome
      component={
        <div className="download-page">
          <h1
            style={{ fontSize: size.width > 480 ? 50 : 35 }}
            className="download-title"
          >
            Download the app from
          </h1>
          <img
            src={AppStorelogo}
            className={size.width > 480 ? "mx-3" : "mx-1"}
            width={size.width > 480 ? 330 : 150}
          />
          <a href="https://play.google.com/store/apps/details?id=com.memofac">
          <img
            src={PlayStoreLogo}
            className="mx-2"
            width={size.width > 480 ? 310 : 140}
          /></a> 
        </div>
      }
    />
  );
};
