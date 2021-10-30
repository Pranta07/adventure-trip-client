import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./AddTourPlace.css";

const AddTourPlace = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        fetch("http://localhost:5000/addNewPlans", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result);
                if (result.insertedId) {
                    Swal.fire("Success!", "Added Successfully!", "success");
                    reset();
                }
            });
    };
    return (
        <div>
            <Container>
                <form
                    className="add-new-plan shadow bg-light m-3"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className="text-warning text-center fw-bold fs-1">
                        Add New Tour Plan
                    </h1>
                    <input
                        placeholder="Service Name"
                        {...register("name", { required: true })}
                    />
                    {errors.name && (
                        <span className="error">This field is required</span>
                    )}

                    <textarea
                        placeholder="Short Description"
                        {...register("desc", { required: true })}
                    />
                    {errors.desc && (
                        <span className="error">This field is required</span>
                    )}
                    <input
                        type="number"
                        placeholder="Price"
                        {...register("price", { required: true })}
                    />
                    {errors.price && (
                        <span className="error">This field is required</span>
                    )}
                    <input
                        placeholder="Img URL"
                        {...register("imgURL", { required: true })}
                    />
                    {errors.imgURL && (
                        <span className="error">This field is required</span>
                    )}

                    <input
                        type="submit"
                        value="Add"
                        className="btn btn-warning text-white"
                    />
                </form>
            </Container>
        </div>
    );
};

export default AddTourPlace;
