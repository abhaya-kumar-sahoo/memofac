import React, { useEffect, useState } from "react";
import InstaLogo from "../../assets/logos/Insta Icon.png";
import GmailLogo from "../../assets/logos/Gmail icon.png";
import FbLogo from "../../assets/logos/Fb Icon.png";
import PlayStoreLogo from "../../assets/logos/Playstore icon.png";
import AppStorelogo from "../../assets/logos/Appstore icon.png";
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

export const StaticHome = ({ component }) => {
  const size = useWindowSize();

  return (
    <div>
      {component}

      <div className="footer">    
            <div className="footer-logo">
              <h2 style={{ paddingTop: 5 }}>Connect with us</h2>

              <h2 style={{ paddingTop: 5 }} className="mx-3">
                :
              </h2>

              <a
                className="mx-1"
                href="https://www.facebook.com/Memofac-103374358665455"
              >
                <img alt="" width={10} height={35} src={FbLogo} />
              </a>
              <a className="mx-3" href="https://www.instagram.com/memofac_app/">
                <img alt="" width={20} height={20} src={InstaLogo} />
              </a>
          
          </div>
        
      </div>
    </div>
  );
};


