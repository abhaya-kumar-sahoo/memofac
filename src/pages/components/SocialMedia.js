import React, { useEffect, useState } from "react";
import InstaLogo from "../../assets/logos/Insta Icon.png";
import FbLogo from "../../assets/logos/Fb Icon.png";

import "./global.css";

// Usage

// Hook
export function useWindowSize() {
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

export const SocialMedia = () => {
  const size = useWindowSize();
  return (
    <div>
      <div className="footer">
        <div className="footer-logo">
          <h1 style={{ paddingTop: 25 }}>Follow us on</h1>

          <h1 style={{ paddingTop: 25 }} className="mx-3">
            :
          </h1>
          <a className= { size.width > 480 ?"mx-5":"mx-2"} href="https://www.instagram.com/memofac_app/">
            <img
              alt=""
              width={size.width > 480 ? 80 :25}
              height={size.width > 460 ? 80 : 25}
              src={InstaLogo}
            />
          </a>
          <a
            className="mx-2"
            href="https://www.facebook.com/Memofac-103374358665455"
          >
            <img
              alt=""
              width={size.width > 480 ? 30 : 12}
              height={size.width > 480 ? 135 : 45}
              src={FbLogo}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
