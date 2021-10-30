import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

const ManageAllPlans = () => {
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/managePlans`)
            .then((res) => res.json())
            .then((data) => {
                setPlans(data);
                console.log(data);
            });
    }, []);
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
                        <button className="btn btn-danger">X</button>
                    </div>
                ))}
            </Container>
        </div>
    );
};

export default ManageAllPlans;
