import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";

const ManageAllPlans = () => {
    const [plans, setPlans] = useState([]);
    const [isDelete, setIsDelete] = useState(false);
    useEffect(() => {
        fetch(`https://limitless-anchorage-56035.herokuapp.com/managePlans`)
            .then((res) => res.json())
            .then((data) => {
                setPlans(data);
                console.log(data);
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

    return (
        <div>
            <h1 className="text-center text-warning fw-bold fs-1 my-4">
                Manage all plans here
            </h1>
            <Container>
                {plans?.map((plan) => (
                    <div
                        key={plan._id}
                        className="bg-light single-tour d-flex justify-content-evenly align-items-center shadow rounded p-3 my-3"
                    >
                        <div>
                            <img src={plan.img} alt="" height="80" width="50" />
                        </div>
                        <h4 className="text-warning fw-bold">
                            {plan.serviceName}
                        </h4>
                        <h4 className="text-dark">User: {plan.name}</h4>
                        <p className="m-0">Status : {plan.status}</p>
                        <button className="btn btn-success">Approved</button>
                        <button
                            onClick={() => handleDelete(plan._id)}
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

export default ManageAllPlans;
