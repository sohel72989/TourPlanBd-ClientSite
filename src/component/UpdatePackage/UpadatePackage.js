import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const UpdatePackage = () => {
    const { id } = useParams();

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch(`https://shrouded-atoll-15464.herokuapp.com/package/updatePackage/${id}`)
            .then(res => res.json())
            .then(data =>
                setPackages(data));
    });

    //Update part
    const handleImgChange = e => {
        const updateImg = e.target.value;
        const update = { img: updateImg, name: packages.name, description: packages.description, price: packages.price, duration: packages.duration };
        setPackages(update);
    }
    const handleNameChange = e => {
        const updateName = e.target.value;
        const update = { img: packages.img, name: updateName, description: packages.description, price: packages.price, duration: packages.duration };
        setPackages(update);

    }
    const handleDescriptionChange = e => {
        const updatedes = e.target.value;
        const update = { img: packages.img, name: packages.name, description: updatedes, price: packages.price, duration: packages.duration };
        setPackages(update);
    }
    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const update = { img: packages.img, name: packages.name, description: packages.description, price: updatePrice, duration: packages.duration };
        setPackages(update);
    }
    const handleDurationChange = e => {
        const updateDuration = e.target.value;
        const update = { img: packages.img, name: packages.name, description: packages.description, price: packages.price, duration: updateDuration };
        setPackages(update);
    }
    const handleUpdatePackage = e => {


    }
    return (
        <div>
            <Header></Header>
            <div className="container py-5">
                <h1 className="text-center mb-5 text-secondary">Update Package</h1>
                <div>
                    <form onSubmit={handleUpdatePackage} className="d-flex flex-column justify-content-center align-items-center">
                        <input className="w-50 mb-3 p-2" type="text" onChange={handleImgChange} value={packages?.img || ''} />
                        <input className="w-50 mb-3 p-2" type="name" onChange={handleNameChange} value={packages?.name || ''} />
                        <textarea className="w-50 mb-3 p-3" onChange={handleDescriptionChange} type="text" value={packages?.description || ''} />
                        <input className="w-50 mb-3 p-2" onChange={handlePriceChange} type="number" value={packages?.price || ''} />
                        <input className="w-50 mb-3 p-2" onChange={handleDurationChange} type="tex" value={packages?.duration || ''} />
                        <button className="btn btn-color mt-3 py-3 px-5">Update</button>
                        <NavLink to={`/manageAllPackage`} className="btn btn-color mt-3 py-3 px-5 btn ms-3">Back</NavLink>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdatePackage;