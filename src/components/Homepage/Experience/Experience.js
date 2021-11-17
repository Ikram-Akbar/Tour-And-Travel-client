import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";


const Experience = () => {
  return (
    
      <Container fluid className="text-center p-5 mt-5">
        <h4 className="text-success fs-2">BLOGS</h4>
        <hr />
        <h1>Recent Blogs</h1>
        <Row>
          <Col md={4} xs={12} className="my-2">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>The PaharPur</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Ikram Akbar</Card.Subtitle>
                <Card.Text>
                  The modern ancient place in Bagladesh derives its name an officer of the British East India Company, a Superintendent of Palongkee outpost. To commemorate his role in refugee rehabilitation work, a market was established and named after him.
                </Card.Text>
                <Card.Link href="#">Read More</Card.Link>
                <Card.Link href="#">Book This One</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12} className="my-2">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>The Sundar Bans</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Ikram Akbar</Card.Subtitle>
                <Card.Text>
                  The sundoar ban derives its name from Captain Hiram Cox, an officer of the British East India Company, a Superintendent of Palongkee outpost. To commemorate his role in refugee rehabilitation work, a market was established and named after him.
                </Card.Text>
                <Card.Link href="#">Read More</Card.Link>
                <Card.Link href="#">Book This One</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12} className="my-2">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>The Cox's Bazaar</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Ikram Akbar</Card.Subtitle>
                <Card.Text>
                  The modern Cox's Bazar derives its name from Captain Hiram Cox, an officer of the British East India Company, a Superintendent of Palongkee outpost. To commemorate his role in refugee rehabilitation work, a market was established and named after him.
                </Card.Text>
                <Card.Link href="#">Read More</Card.Link>
                <Card.Link href="#">Book This One</Card.Link>
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
      </Container>
    
  );
};

export default Experience;
