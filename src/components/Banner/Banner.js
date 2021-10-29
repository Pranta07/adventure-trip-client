import React from "react";
import { Carousel } from "react-bootstrap";
const Banner = () => {
    return (
        <Carousel interval={4000} fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/VMrkw2T/antonio-grosz-OIzy-Uubqr-E-unsplash.jpg"
                    alt="First slide"
                    height="600"
                />
                <Carousel.Caption>
                    <h3 className="text-warning fs-1 fw-bold">
                        Mountains Adventures
                    </h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/C2J0f9h/daniel-leone-g30-P1zc-Oz-Xo-unsplash.jpg"
                    alt="Second slide"
                    height="600"
                />
                <Carousel.Caption>
                    <h3 className="text-warning fs-1 fw-bold">Second label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/JQmf7CQ/bailey-zindel-NRQV-h-BF10-M-unsplash.jpg"
                    alt="Third slide"
                    height="600"
                />
                <Carousel.Caption>
                    <h3 className="text-warning fs-1 fw-bold">
                        Third slide label
                    </h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
