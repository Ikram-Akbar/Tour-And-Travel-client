import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
// import useAuth from "../../../hooks/useAuth";
import "./Footer.css";

const Footer = () => {
//   const { user } = useAuth();
  return (
    <div className="bg-success py-5 text-white shadow">
      <Container>
        <Row>
          <Col md={4} xs={12} className="my-3">
            <div>
              <h2 className="text-white">Tour and Travel</h2>
              <hr />
              <p>
                "The more that you read, the more things you will know. The more
                that you learn, the more places you’ll go."
              </p>
              <div className="footer-icon">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12} className="my-3">
            <div>
              <h2 className="mb-3">Our Address</h2>
              <hr />
              <div>
                <span>3596 Longview Ave, NY</span>
              </div>
              <div className="my-2">
                <span>098-098-678</span>
              </div>
              <div>
                <span>tour@travel.com</span>
              </div>
              <div className="mt-2">
                <p>Business Hour</p>
                <span>09.00 - 17.00</span>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12} className="my-3">
            <h2>Newsletter</h2>
            <hr />
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="email"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
