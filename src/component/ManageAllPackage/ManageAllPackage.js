import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import './ManageAllPackage.css'
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import { Link } from 'react-router-dom';


const ManageAllPackage = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/package')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);
    let id = 1;
    const handleDelete = id => {
        const warning = window.confirm('Areyou sure delete this package?')
        if (warning) {
            const url = `http://localhost:5000/package/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        alert('Deleted')
                        const remaining = packages.filter(pack => pack._id !== id);
                        setPackages(remaining);
                    }
                });
        }
    }
    return (
        <div>
            <Header></Header>
            <div className="container-fluid">
                <h1 className="text-secondary text-center mt-5 mb-5">Available Package List</h1>
                <table className="table table-hover text-center mt-5">
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
                                        <Link to={`/package/updatePackage/${pack._id}`}>
                                            <button className="btn btn-success">Update</button>
                                        </Link>
                                        <br />
                                        <button onClick={() => handleDelete(pack._id)} className="btn btn-secondary ms-2 mt-2" >Delete</button>
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

export default ManageAllPackage;