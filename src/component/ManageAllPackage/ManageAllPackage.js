import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import './ManageAllPackage.css'

const ManageAllPackage = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/package')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);
    let id = 1;
    return (
        <div>
            <h1 className="text-secondary text-center">Available Package List</h1>
            <table className="table table-hover text-center">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        packages.map(pack =>
                            <tr>
                                <th scope="row">{id++}</th>
                                <td><Image src={pack.img} /></td>
                                <td>{pack.name} </td>
                                <td>{pack.description} </td>
                                <td>${pack.price} </td>
                                <td>{pack.duration} </td>
                                <td className="text-center">
                                    <button className="btn btn-success">Update</button><br />
                                    <button className="btn btn-secondary ms-2 mt-2">Delete</button>
                                </td>


                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageAllPackage;