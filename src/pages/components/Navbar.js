import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useWindowSize } from "./SocialMedia";
import MemoLogo from "../../assets/logos/Full name Logo.png";

export default function NavigationBar() {
  const size = useWindowSize();
  return (
    <div>
      
      {size.width > 480 ? (
        <Navbar
          className="pt-4 navbar pr-5"
          collapseOnSelect
          expand="lg"
          variant="dark"
          bg="transparent"

        >
          <Navbar.Brand href="/" style={{}} >
            <img
              id="memo-logo"
              src={MemoLogo}
              alt="Memofac Logo"
              height={size.width > 480 ? "60" : "40"}
              className="logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ border: 0, color: "transparent", backgroundColor: "red" }}
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" style={{}} >
              <Nav.Link className="h5 px-3 " href="/">
                Home
              </Nav.Link>
              <Nav.Link className="h5 px-3" href="/privacy">
                Privacy Policy
              </Nav.Link>
              <Nav.Link className="h5 px-3" href="/about">
                About Us
              </Nav.Link>
              <Nav.Link className="h5 px-3" href="/download">
                Download
              </Nav.Link>
              <Nav.Link className="h5 px-3" href="/social">
              Social Media
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <Navbar className="mobile-nav" variant="dark" bg="transparent" expand={false}>
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
                color:"transparent",
                border:0
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
                  <Nav.Link active className="h5 px-1 nav-item " href="/">
                    Home
                  </Nav.Link>
                  <Nav.Link className="h5 px-1 nav-item" href="/privacy">
                    Privacy Policy
                  </Nav.Link>
                  <Nav.Link className="h5 px-1 nav-item" href="/about">
                    About Us
                  </Nav.Link>
                  <Nav.Link className="h5 px-1 nav-item" href="/download">
                    Download
                  </Nav.Link>
                  <Nav.Link className="h5 px-1" href="/social">
                    Social Media
              </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      )}
    </div>
  );
}
