import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
    return (
        <Container>
            <Row>
                <Col className="text-center">
                <h3 className="text-success">Feel Free to Contact Us </h3>
                <hr />
                <h4>Tour and Travel</h4>
                <h4>Phone</h4>
                <p>098 098 678</p>
                <h4>Email</h4>
                <p>tour@travel.com</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
