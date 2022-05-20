import React from "react";
import { Col } from "react-bootstrap";
import { StaticHome, useWindowSize } from "../components";
import "../Privacy Policy/Privacy.css";
export default function About() {
  const size = useWindowSize();
  return (
    <StaticHome
      component={
        <div
          className="main-privacy"
          style={{ paddingTop: 20,  }}
        >
          <Col className="privacy">
            <h1 className="main-text">Review App</h1>
            <p>
              We are a social opinion app where you get to see reviews from
              friends as well along with general public for categories like
              Apps, Movies/TV Series, Books, Restaurants, Hotels, Fashon_Brands,
              Schools/Colleges, Investment Firms, Event organiser, NGOs, Youtube
              channels, Spa centres, etc
            </p>

            <p>
              Our objective is to help people decide better by providing them
              reviews from their very own people whom they can trust. So
              whenever user are taking decisions like ...
            </p>
            <p>
              1) Which college should I opt for between these 4-5 options ??? ;
              or
            </p>
            <p>
              2) Which organiser should I give this event contract to ??? ; or
            </p>
            <p>
              3) Which movie should I watch that goes with my taste ??? ; etc
            </p>
            <p>
              all they need to do is check out what their friend's and public
              opinions are to better decide what to select.
            </p>
          </Col>
        </div>
      }
    />
  );
}
