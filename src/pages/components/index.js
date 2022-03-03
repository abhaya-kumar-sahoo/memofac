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
        {size.width > 480 ? (
          <div className="footer" style={{ paddingBottom: 20 }}>
            <div className="footer-logo">
              <h2>Connect with us</h2>

              <h2 className="mx-3">:</h2>

              <a className="mx-3" href="https://www.instagram.com/memofac_app/">
                <img alt="" width={26} height={26} src={InstaLogo} />
              </a>
              <a
                className="mx-3"
                href="https://www.facebook.com/Memofac-103374358665455"
              >
                <img alt="" width={17} height={50} src={FbLogo} />
              </a>
              <a className="mx-3" href="mailto:memofacapp@gmail.com">
                <img alt="" width={28} height={25} src={GmailLogo} />
              </a>
            </div>

            <div className="downloads" sm={4}>
              <img alt="" className="mx-2" width={120} src={AppStorelogo} />
              <a href="https://play.google.com/store/apps/details?id=com.memofac">
                <img alt="" width={110} src={PlayStoreLogo} />
              </a>
            </div>
          </div>
        ) : (
          <div className="container footer-list">
            <div style={{}}>
              <h5>Connect us</h5>
              <a href="mailto:memofacapp@gmail.com">
                <p>Email</p>
              </a>
              <a href="https://www.facebook.com/Memofac-103374358665455">
                <p>Facebook</p>
              </a>
              <a href="https://www.instagram.com/memofac_app/">
                <p>Instagram</p>
              </a>
            </div>
            <div style={{ paddingLeft: 30 }}>
              <h5>Download</h5>
              <a href="https://play.google.com/store/apps/details?id=com.memofac">
                <p>Android</p>
              </a>

              <p>Iphone</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
