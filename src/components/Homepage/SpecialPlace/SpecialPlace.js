import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
const SpecialPlace = () => {
  return (
    <div>
      <Container
        fluid
        style={{
          backgroundImage:
            "url(" +
            "https://i.ibb.co/cg4sG48/alexey-artyukh-DLf3uwk-RNPA-unsplash-1.jpg" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "600px",
          backdropFilter: "blur(8px)",
        }}
      >
        <Row>
          <Col md={12} xs={12}>
            <div className="text-center text-light justify-content fs-2 p-5">
              <h2>
                WELCOME TO <br/> <span className="text-success">TOUR & </span> <span className="text-dark">TRAVEL</span>
              </h2>
              <p>Are you a Traveller?</p>
              <p>
                You are very Welcome to our World . <br/> We Are provided u special
                travel and tour plan . {" "}
              </p>
              <Button variant="outline-light">Learn More</Button>{' '}
              <Button variant="outline-light">Visit Us</Button>{' '}
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SpecialPlace;
