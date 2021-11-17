import React from "react";
import { Carousel, Container } from "react-bootstrap";

import img1 from "../../../image/pic (1).png";
import img2 from "../../../image/pic (2).png";
import img3 from "../../../image/pic (3).png";

const Banner = () => {
    return (
        <Container fluid className="mt-2">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>RangaMati</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Cox's Bazar </h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>The Himalay </h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;
