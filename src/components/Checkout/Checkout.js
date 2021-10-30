import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Checkout.css";

const Checkout = () => {
    const [service, setService] = useState({});

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { user } = useAuth();

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, [id]);

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <Container>
            <Row className="g-5 my-5">
                <Col lg={6}>
                    <div className="tour-place">
                        <div className="tour-img">
                            <img
                                src={service.imgURL}
                                alt=""
                                className="w-100 rounded"
                                height="400"
                            />
                        </div>
                        <div className="tour-desc">
                            <h1 className="text-warning fw-bold">
                                {service.name}
                            </h1>
                            <p className="text-white">{service.desc}</p>
                            <p className="fs-2 fw-bold text-white">
                                Price: ${service.price}
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <form
                        className="checkout-form shadow bg-light"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            defaultValue={user.displayName}
                            {...register("name")}
                        />

                        <input
                            defaultValue={user.email}
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                        <input
                            placeholder="Address"
                            defaultValue=""
                            {...register("address")}
                        />
                        <input
                            placeholder="City"
                            defaultValue=""
                            {...register("city")}
                        />
                        <input
                            placeholder="Phone Number"
                            defaultValue=""
                            {...register("phone")}
                        />

                        <input
                            type="submit"
                            value="Checkout"
                            className="btn btn-warning text-white"
                        />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;
