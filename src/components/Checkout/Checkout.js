import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Checkout.css";

const Checkout = () => {
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
            .then((data) => console.log(data));
    }, [id]);

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />

                <input
                    defaultValue={user.email}
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <span className="error">This field is required</span>
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
        </div>
    );
};

export default Checkout;
