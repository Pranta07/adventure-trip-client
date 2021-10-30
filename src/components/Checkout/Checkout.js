import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Checkout.css";
import Swal from "sweetalert2";

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
        fetch(`https://limitless-anchorage-56035.herokuapp.com/service/${id}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, [id]);

    const onSubmit = (data) => {
        data.serviceId = id;
        data.img = service.imgURL;
        data.serviceName = service.name;
        data.price = service.price;
        data.status = "Pending";
        console.log(data);
        fetch("https://limitless-anchorage-56035.herokuapp.com/takeOrders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.acknowledged) {
                    Swal.fire(
                        "Success!",
                        "Tour Plan Successfully Booked!",
                        "success"
                    );
                    console.log(result);
                    reset();
                }
            });
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
