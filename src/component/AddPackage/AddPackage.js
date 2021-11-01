import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import './AddPackage.css'


const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://shrouded-atoll-15464.herokuapp.com/package', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Package Added Succesfull ')
                    reset();
                }
            })


    };

    return (
        <div>
            <h2 className="text-center text-secondary">Add New Package</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
                    <input className="w-50 m-2 p-2" {...register("img")} type="text" placeholder="image URL" required />
                    <input className="w-50 m-2 p-2" {...register("name")} type=
                        "name" placeholder="PackageName" required />
                    <textarea className="w-50 m-2 p-2" {...register('description')} type="text" placeholder="Description" required />
                    <input className="w-50 m-2 p-2" type="number" {...register("price")} placeholder="Price" required />
                    <input className="w-50 m-2 p-2" {...register("duration")} type="text" placeholder="Duration" required />
                    <input className="btnx btn btn-success mt-3" type="submit" value="Add Package" />
                    <div> <NavLink to={'/home'} className="btnx btn btn-secondary m-3">Back</NavLink></div>
                </form>
            </div>
        </div>
    );
};

export default AddPackage;