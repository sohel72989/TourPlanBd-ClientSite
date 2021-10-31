import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const MyBooking = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/myBooking')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);
    let id = 1;
    const handleDelete = id => {
        const warning = window.confirm('Areyou sure delete this Booking?')
        if (warning) {
            const url = `http://localhost:5000/myBooking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        alert('Deleted')
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                });
        }
    }
    return (
        <div>
            <Header></Header>

            <div className="container-fluid">
                <h1 className="text-secondary text-center mt-5 mb-5">Booking Package List</h1>
                <table className="table table-hover text-center mt-5 mb-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Adress</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking =>
                                <tr>
                                    <th scope="row">{id++}</th>
                                    <td>{booking.packageId} </td>
                                    <td>{booking.name} </td>
                                    <td>{booking.email} </td>
                                    <td>{booking.number} </td>
                                    <td>{booking.address} </td>
                                    <td className="text-center">
                                        <button onClick={() => handleDelete(booking._id)} className="btn btn-secondary ms-2 mt-2" >Delete</button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyBooking;