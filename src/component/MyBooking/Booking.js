import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const Booking = () => {
    const { id } = useParams();
    const { user } = UseAuth();
    console.log(user);
    console.log(id);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://shrouded-atoll-15464.herokuapp.com/booking', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Booking Succesfull ')
                    reset();
                }
            })
    }
    return (
        <div>
            <h2 className="text-center text-secondary">Booking Now</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
                    <input className="w-50 m-2 p-2" {...register("packageId")} type="text" value={`package Id: ${id}`} />
                    <input className="w-50 m-2 p-2" {...register("name")} type="text" value={user.displayName} />
                    <input className="w-50 m-2 p-2" {...register("email")} type="email" value={user.email} />
                    <textarea className="w-50 m-2 p-2" {...register('address')} type="text" placeholder="Address" required />
                    <input className="w-50 m-2 p-2" type="number" {...register("number")} placeholder="Phone Number" />
                    <input type="submit" className="btn btn-color mt-3 py-3 px-5" value="Confirm" />
                    <div> <NavLink to={'/home'} className="btnx btn btn-secondary m-3">Cancel</NavLink></div>
                </form>
            </div>
        </div>
    );
};

export default Booking;