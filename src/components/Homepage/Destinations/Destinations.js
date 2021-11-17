import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Destinations.css";

const Destinations = () => {
  const { setIsLoading } = useAuth();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const uri = "https://vast-reef-29237.herokuapp.com/allbooking";
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setPlaces(data);
      });
  }, [setIsLoading]);

  return (
    <div className=" bg-light">
      <h4 className="text-center fs-1">Location for Travel</h4>
      <h1 className="text-center text-success">
        Our Best <span>Spot</span>
      </h1>
      <Container className="bg-light">
        <Row xs={1} md={2} lg={3} className="g-4 ">
          {places.map((place) => (
            <Col key={place._id}>
              <Card className="shadow">
                <Card.Img variant="top" src={place.img} className="card-img" />
                <Card.Body>
                  <Card.Title className="card-title">{place.name}</Card.Title>
                  <Card.Text >
                    {place.description.slice(0, 80)}...
                  </Card.Text>
                  <Card.Text>${place.price}</Card.Text>
                  <Link to={`/placeorder/${place._id}`}>
                  <Button variant="outline-success">Book Now</Button>{' '}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Destinations;
