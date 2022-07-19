import React, { useEffect, useState } from "react";
import "./Home.css";




import PlayStoreLogo from "../../assets/logos/Playstore icon.png";

// Usage
import { MDBContainer, MDBModal, MDBModalBody } from "mdbreact";

import { lowSizeImage } from "../components/ShortImage";

import ResponsiveGallery from "react-responsive-gallery";

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
                width={size.width > 480 ? 310 : 100}
              />
            </a>
            <h2 className="header-description HEADER-BOTTOM">
              to check reviews{" "}
            </h2>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    </>
  );
}

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div className="home"  onClick={()=> setShow(!show)} >
      <Modals  show={show} onClose={()=> setShow(!show)} />
      <ResponsiveGallery
        numOfImagesPerRow={{ xs: 2, s: 2, m: 3, l: 3, xl: 4, xxl: 6 }}
        colsPadding={{ xs: 8, s: 8, m: 8, l: 8, xl: 8, xxl: 8 }}
        images={lowSizeImage}
        imagesPaddingBottom={{xs: 15,s: 15,m: 15,l: 15,xl: 15,xxl:15}}
      />
      
    </div>
  );
}
