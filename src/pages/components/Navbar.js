import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useWindowSize } from "./index";
import MemoLogo from "../../assets/logos/Full name Logo.png";

const NavigationBar = () => {
  const size = useWindowSize();
  return (
    <div>
      {" "}
      {size.width > 480 ? (
        <Navbar
          className="pt-4 navbar pr-5"
          collapseOnSelect
          expand="lg"
          variant="dark"
          bg="transparent"
        >
          <Navbar.Brand href="/">
            <img
              id="memo-logo"
              src={MemoLogo}
              alt="Memofac Logo"
              height={size.width > 480 ? "75" : "40"}
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="h3 px-4 " href="/">
                Home
              </Nav.Link>
              <Nav.Link className="h3 px-4" href="/privacy">
                Privacy Policy
              </Nav.Link>
              <Nav.Link className="h3 px-4" href="/about">
                About Us
              </Nav.Link>
              <Nav.Link className="h3 px-4" href="/download">
                Download
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <Navbar variant="dark" bg="transparent" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                id="memo-logo"
                src={MemoLogo}
                alt="Memofac Logo"
                height="50"
                // className="logo"
                style={{
                  position: "relative",
                  left: -10,
                }}
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              style={{
                position: "absolute",
                right: 15,
              }}
            />

            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              className="header-mobile"
            >
              <Offcanvas.Header closeButton color="#fff" closeVariant="white">
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  <img
                    id="memo-logo"
                    src={MemoLogo}
                    alt="Memofac Logo"
                    height="60"
                    // style={{borderRadius:"50%"}}
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link active className="h4 px-1 nav-item " href="/">
                    Home
                  </Nav.Link>
                  <Nav.Link className="h4 px-1 nav-item" href="/privacy">
                    Privacy Policy
                  </Nav.Link>
                  <Nav.Link className="h4 px-1 nav-item" href="/about">
                    About Us
                  </Nav.Link>
                  <Nav.Link className="h4 px-1 nav-item" href="/download">
                    Download
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default NavigationBar;
