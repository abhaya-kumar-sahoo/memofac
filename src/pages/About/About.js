import React from "react";
import { Col } from "react-bootstrap";
import { StaticHome, useWindowSize } from "../components";

export default function About() {
  const size = useWindowSize();
  return (
    <StaticHome
      component={
        <div
          className="main-privacy"
          style={{ paddingTop: size.width > 480 ? 70 : 50 }}
        >
          <h1
            style={{ fontSize: size.width > 480 ? 50 : 35 }}
            className="main-text"
          >
            Review App
          </h1>
          <Col
            style={{ fontSize: size.width > 480 ? 26 : 18 }}
            className="privacy"
          >
            <p>
              Memofac is a review aggregator app where you not only get to see
              ratings of popular categories like apps, movies, books,
              restaurants, hotels, etc but even unique categories like music
              fest, cruise, youtube channels, event organiser, etc. The best
              part is you can see the reviews from your friends as well here.
            </p>
          </Col>
        </div>
      }
    />
  );
}
