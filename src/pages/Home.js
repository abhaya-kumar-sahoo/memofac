import React, { useEffect, useState } from "react";
import "./Home.css";
import Marquee from "react-fast-marquee";

import { StaticHome } from "./components/index";
import { images, images_2 } from "./components/Images";

import PlayStoreLogo from "../assets/logos/Playstore icon.png";

// Usage
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
} from "mdbreact";
import { MobileViewImages } from "./components/MobileImages";
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

function Modals({ show, onClose = () => {} }) {
  const size = useWindowSize();

  return (
    <>
      <MDBContainer>
        <MDBModal className="modal-lg" isOpen={show} centered>
          <MDBModalBody className="modal-body">
            <button className="modal-headers">
              <h1 onClick={onClose} className="modal-headers">
                x
              </h1>
            </button>

            <h1 className="header-description"> Download the app from</h1>
            <a href="https://play.google.com/store/apps/details?id=com.memofac">
              <img
                alt="playstore"
                src={PlayStoreLogo}
                className="mx-2"
                width={size.width > 480 ? 310 : 140}
              />
            </a>
            <h2 className="header-description" style={{ fontSize: 72 }}>
              to check reviews{" "}
            </h2>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    </>
  );
}

export default function Home() {
  const size = useWindowSize();
  const [show, setShow] = useState(false);
  return (
    <StaticHome
      component={
        <div className="list">
          <Modals show={show} onClose={() => setShow(!show)} />
          <div style={{ width: size.width }}>
            {size.width > 480 ? (
              <>
                <Marquee gradientColor={""} speed={80} pauseOnHover play={true}>
                  <div class="scrolling-wrapper">
                    {images.map((item, key) => {
                      return (
                        <div
                          className="card"
                          key={key}
                          onClick={() => setShow(!show)}
                        >
                          {item.url === "" ? null : (
                            <img
                              width={220}
                              height={220}
                              style={{ borderRadius: 10 }}
                              src={item.url}
                              alt="icon"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </Marquee>

                <Marquee gradientColor={""} speed={80} pauseOnHover play={true}>
                  <div class="scrolling-wrapper" style={{ marginTop: 20 }}>
                    {images_2.map((item, key) => {
                      return (
                        <div
                          className="card"
                          key={key}
                          onClick={() => setShow(!show)}
                        >
                          {item.url === "" ? null : (
                            <img
                              width={220}
                              height={220}
                              style={{ borderRadius: 10 }}
                              src={item.url}
                              alt="icon"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </Marquee>
              </>
            ) : (
              <div
                className="vertical-list"
                style={{
                  height: size.height*0.8,
                  overflow: "scroll",
                  overflowX: "hidden",
                  display:"flex",
                  justifyContent:"space-around",
                  paddingLeft:15,
                  paddingRight:15
                }}
              >
                <div>
              
                  {images.map((item, key) => {
                    return (
                      <div className="MobileImage" key={key}>
                        {item.url === "" ? null : (
                          <img
                            width={150}
                            height={150}
                            style={{ paddingBottom: 5,borderRadius:10 }}
                            src={item.url}
                            alt="icon"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
                <div>
               

                  {images_2.map((item, key) => {
                    return (
                      <div className="MobileImage" key={key}>
                        {item.url === "" ? null : (
                          <img
                            width={150}
                            height={150}
                            style={{ paddingBottom: 5,borderRadius:10 }}
                            src={item.url}
                            alt="icon"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      }
    />
  );
}
