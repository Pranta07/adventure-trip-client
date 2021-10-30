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
                        Some mountains only require a good pair of shoes. Others
                        require an entire team to conquer. Knowing which is
                        which is the key to success.
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
                    <h3 className="text-warning fs-1 fw-bold">
                        Explore The World
                    </h3>
                    <p>
                        Mountains teach that not everything in this world can be
                        rationally explained.
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
                        Adventure Everywhere You Go
                    </h3>
                    <p>
                        Keep close to Nature’s heart… and break clear away, once
                        in awhile, and climb a mountain or spend a week in the
                        woods. Wash your spirit clean.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
