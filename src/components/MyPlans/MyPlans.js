import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const MyPlans = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myPlans/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
                console.log(data);
            });
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            fetch(`http://localhost:5000/remove/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.deletedCount) {
                        console.log(result);
                        Swal.fire(
                            "Success!",
                            "Registered Successfully!",
                            "success"
                        );
                    }
                });
        }
    };

    return (
        <div>
            <h1 className="text-center text-warning fw-bold fs-1 my-4">
                Tour Places You Booked
            </h1>
            <Container>
                {orders.map((order) => (
                    <div
                        key={order._id}
                        className="bg-light single-tour d-flex justify-content-evenly align-items-center shadow rounded p-3 my-3"
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
                        <p className="m-0">Status : {order.status}</p>
                        <button
                            onClick={() => handleDelete(order._id)}
                            className="btn btn-danger"
                        >
                            X
                        </button>
                    </div>
                ))}
            </Container>
        </div>
    );
};

export default MyPlans;
