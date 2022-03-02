import React, { useEffect, useState } from "react";
import "./Home.css";
import Marquee from "react-fast-marquee";

import Fashion from "../assets/logos/Fashion (W).png";

import Finance from "../assets/logos/Finance (W).png";

import Hospital from "../assets/logos/Health (W).png";
import Hotels from "../assets/logos/Hotel (B).png";
import Movies from "../assets/logos/Movies (B).png";
import NGOs from "../assets/logos/NGOs (W).png";
import Restaurant from "../assets/logos/Restaurant (W).png";
import YouTube from "../assets/logos/Youtube Channels (W).png";
import Zoo from "../assets/logos/Zoo (W).png";
import Beach from "../assets/logos/Beach (W).png";

import { StaticHome } from "./components/index";
const images = [
  {
    url: Hotels,
    name: "Hotels",
  },

  {
    url: Restaurant,
    name: "Restaurant",
  },
  {
    url: Beach,
    name: "Beach",
  },
  {
    url: Movies,
    name: "Movies",
  },

  {
    url: Fashion,
    name: "Fashion",
  },

  {
    url: Finance,
    name: "Finance",
  },

  {
    url: Hospital,
    name: "Hospital",
  },
  {
    url: NGOs,
    name: "NGOs",
  },

  {
    url: Zoo,
    name: "Zoo",
  },
  {
    url: YouTube,
    name: "Youtube Channels",
  },
  {
    url: "",
    name: "Etc",
  },
];

// Usage

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export const Home = () => {
  const [state, setState] = React.useState(1);
  const [play, setPlay] = React.useState(false);
  const size = useWindowSize();
  React.useEffect(() => {
    setPlay(!play);
  }, [state]);
  return (
    <StaticHome
      component={
        <div className="list">
          <div>
            <h1
              style={{ fontSize: size.width > 480 ? 45 : 20, paddingTop: 30 }}
              className="header-description"
            >
              Find{" "}
              <span
                className="span"
                style={{ fontSize: size.width > 480 ? 75 : 35 }}
              >
                reviews
              </span>{" "}
              from friends for ...
            </h1>
          </div>
          <div style={{width:size.width,backgroundColor:"red"}}>
          {size.width > 480 ? (
            <Marquee gradientColor={""} speed={80} play={true}>
              {images.map((item) => {
                return (
                  <div className="button">
                    {item.url === "" ? null : (
                      <img
                        width={40}
                        height={40}
                        style={{ paddingBottom: 5 }}
                        src={item.url}
                      />
                    )}{" "}
                    {item.name}
                  </div>
                );
              })}
            </Marquee>
          ) : (
            <div
              className="vertical-list"
              style={{
                height: 250,
                overflow: "scroll",
                overflowX: "hidden",
              }}
            >
              {images.map((item, key) => {
                return (
                  <div className="button-class">
                    {item.url === "" ? null : (
                      <img
                        width={25}
                        height={30}
                        style={{ paddingBottom: 5 }}
                        src={item.url}
                      />
                    )}{" "}
                    {item.name}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        </div>
      }
    />
  );
};
