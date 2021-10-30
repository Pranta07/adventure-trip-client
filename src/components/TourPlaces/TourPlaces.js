import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TourPlaces.css";

const TourPlaces = () => {
    const [services, setServices] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch("https://limitless-anchorage-56035.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
                setLoading(false);
            });
    }, []);

    // console.log(services);
    return (
        <div>
            <h1 className="text-warning fw-bold text-center mt-4">
                Go Exotic Places
            </h1>
            <hr className="w-25 mx-auto" />
            <p className="text-secondary text-center mx-auto w-50 mb-5">
                Book a memorable tour at great price! Grab our last minute offer
                and pack the things for the journey you dream about. See our
                recommendations.
            </p>
            {loading ? (
                <div className="d-flex justify-content-center mb-5">
                    <Spinner variant="warning" animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <Container>
                    <Row className="g-4 mb-5">
                        {services?.map((service) => (
                            <Col
                                key={service._id}
                                xs={12}
                                md={6}
                                lg={4}
                                className="h-100"
                            >
                                <div className="tour-place">
                                    <div className="tour-img">
                                        <img
                                            src={service.imgURL}
                                            alt=""
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="tour-desc">
                                        <h1 className="text-warning fw-bold">
                                            {service.name}
                                        </h1>
                                        <p className="text-white">
                                            {service.desc}
                                        </p>
                                        <p className="fs-2 fw-bold text-white">
                                            Price: ${service.price}
                                        </p>
                                    </div>
                                    <Link to={`/checkout/${service._id}`}>
                                        <button className="book-now-btn btn btn-warning text-white">
                                            Book Now
                                        </button>
                                    </Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default TourPlaces;
