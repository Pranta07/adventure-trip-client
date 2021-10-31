import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const ManageAllPlans = () => {
    const [plans, setPlans] = useState([]);
    const [isDelete, setIsDelete] = useState(false);
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://limitless-anchorage-56035.herokuapp.com/managePlans`)
            .then((res) => res.json())
            .then((data) => {
                setPlans(data);
                // console.log(data);
                setLoading(false);
            });
    }, [isDelete, status]);

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

    const updateStatus = (id) => {
        setStatus(false);
        fetch(`https://limitless-anchorage-56035.herokuapp.com/update/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({}),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    setStatus(true);
                    Swal.fire(
                        "Success!",
                        "Status Updated Successfully!",
                        "success"
                    );
                }
            });
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
            <h1 className="my-4 text-center text-warning fw-bold fs-1">
                Manage all plans here
            </h1>
            <Container>
                {plans?.map((plan) => (
                    <div
                        key={plan._id}
                        className="p-3 my-3 rounded shadow bg-light single-item d-flex justify-content-evenly align-items-center"
                    >
                        <div>
                            <img src={plan.img} alt="" height="80" width="50" />
                        </div>
                        <h4 className="text-warning fw-bold">
                            {plan.serviceName}
                        </h4>
                        <h4 className="text-dark">User: {plan.name}</h4>
                        {plan.status === "Approved" ? (
                            <p className="py-1 m-0 text-success">
                                Status : {plan.status}
                            </p>
                        ) : (
                            <p className="py-1 m-0 text-warning">
                                Status : {plan.status}
                            </p>
                        )}
                        <div>
                            <button
                                onClick={() => updateStatus(plan._id)}
                                className="mx-2 btn btn-success"
                            >
                                Approved
                            </button>
                            <button
                                onClick={() => handleDelete(plan._id)}
                                className="btn btn-danger"
                            >
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        </div>
                    </div>
                ))}
            </Container>
        </div>
    );
};

export default ManageAllPlans;
