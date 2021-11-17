import React from "react";
import { Button,Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        className="py-3 shadow"
        collapseOnSelect
        expand="lg"
        bg="success"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">

            <i className="fs-3 fw-bold ">
              TOUR & <span className="text-dark">TRAVEL</span>
            </i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-auto ">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              {user?.email && (
                <>
                  <Nav.Link as={Link} to="/mybooking">
                    My Bookings
                  </Nav.Link>
                  <Nav.Link as={Link} to="/managebooking">
                    Manage All Booking
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addnewbooking">
                    Add New Booking
                  </Nav.Link>
                </>
              )}
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex ">
              <FormControl
                type="search"
                placeholder="Need Anything?"
                className="me-2"
                aria-label="Search"
              />
              <Button className="mx-2" variant="outline-light">Search</Button>
            </Form>

            {user?.email ? (
              <span>
                <span className="username">{user?.displayName}</span>
                <span className="  logout" >
                 <Button onClick={logOut} variant="outline-light">Log Out</Button>
                </span>
              </span>
            ) : (
              <Nav>
                <Nav.Link as={Link} to="/login" className="fs-5">
                  Log in
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
