import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import "./MyPlans.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const MyPlans = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDelete, setIsDelete] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(
            `https://limitless-anchorage-56035.herokuapp.com/myPlans/${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
                // console.log(data);
                setLoading(false);
            });
    }, [isDelete]);

    const handleDelete = (id) => {
        setIsDelete(false);
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            fetch(
                `https://limitless-anchorage-56035.herokuapp.com/remove/${id}`,
                {
                    method: "DELETE",
                }
            )
                .then((res) => res.json())
                .then((result) => {
                    if (result.deletedCount) {
                        setIsDelete(true);
                        console.log(result);
                        Swal.fire(
                            "Success!",
                            "Deleted Successfully!",
                            "success"
                        );
                    }
                });
        }
    };

    if (loading) {
        return (
            <div className="my-5 d-flex justify-content-center">
                <Spinner variant="warning" animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <div>
            {orders.length ? (
                <h1 className="my-4 text-center text-warning fw-bold fs-1">
                    Tour Places You Booked
                </h1>
            ) : (
                <h1 className="my-4 text-center text-warning fw-bold fs-1">
                    Currently You Have No Plans!
                </h1>
            )}
            <Container>
                {orders.map((order) => (
                    <div
                        key={order._id}
                        className="p-3 my-3 rounded shadow single-item bg-light d-md-flex justify-content-md-evenly align-items-center"
                    >
                        <div>
                            <img
                                src={order.img}
                                alt=""
                                height="80"
                                width="50"
                            />
                        </div>
                        <h4 className="text-warning fw-bold">
                            {order.serviceName}
                        </h4>
                        <h4 className="text-warning fw-bold">${order.price}</h4>
                        {order.status === "Approved" ? (
                            <p className="py-1 m-0 text-success">
                                <FontAwesomeIcon icon={faCheckCircle} />{" "}
                                {order.status}
                            </p>
                        ) : (
                            <p className="py-1 m-0 text-warning">
                                <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                                {order.status}
                            </p>
                        )}
                        <button
                            onClick={() => handleDelete(order._id)}
                            className="btn btn-danger"
                        >
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                ))}
            </Container>
        </div>
    );
};

export default MyPlans;
