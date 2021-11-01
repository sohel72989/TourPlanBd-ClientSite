import React from 'react';
import { Image } from 'react-bootstrap';
import img1 from './../../img/features/images-1.jpg';
import img2 from './../../img/features/images-2.jpg';
import img3 from './../../img/features/images-3.jpg';
import img4 from './../../img/features/images-4.jpg';
import img5 from './../../img/features/images-5.jpg';
import img6 from './../../img/features/images-6.jpg';
import img7 from './../../img/features/images-7.jpg';
import img8 from './../../img/features/images-8.jpg';
import img9 from './../../img/features/images-9.jpg';
import './Features.css'

const Features = () => {
    return (
        <div>
            <h2 className="text-secondary text-center m-5">Features</h2>
            <div className="container text-center d-lg-flex">
                <div className="hovereffect">
                    <Image className="img-responsive" src={img2} alt="" />
                    <div className="overlay">
                        <h2>Patuakhali Beach</h2>

                    </div>
                </div>
                <div className="hovereffect">
                    <Image className="img-responsive" src={img3} alt="" />
                    <div className="overlay">
                        <h2>Taj Mahal</h2>
                    </div>
                </div>
                <div className="hovereffect">
                    <Image className="img-responsive" src={img1} alt="" />
                    <div className="overlay">
                        <h2>Sajek Valley</h2>
                    </div>

                </div>
                <div className="hovereffect">
                    <Image className="img-responsive" src={img4} alt="" />
                    <div className="overlay">
                        <h2>Mangrove</h2>
                    </div>
                </div>
                <div className="hovereffect">
                    <Image className="img-responsive" src={img5} alt="" />
                    <div className="overlay">
                        <h2>Buddha Mandir</h2>
                    </div>
                </div>
                <div className="hovereffect">
                    <Image className="img-responsive" src={img6} alt="" />
                    <div className="overlay">
                        <h2>Khagra Chari</h2>
                    </div>

                </div>

                <div className="hovereffect">
                    <Image className="img-responsive" src={img7} alt="" />
                    <div className="overlay">
                        <h2>Saint Martine</h2>
                    </div>
                </div>
                <div className="hovereffect">
                    <Image className="img-responsive" src={img8} alt="" />
                    <div className="overlay">
                        <h2>Cox's Bazar</h2>
                    </div>
                </div>
                <div className="hovereffect">
                    <Image className="img-responsive" src={img9} alt="" />
                    <div className="overlay">
                        <h2>Radieson</h2>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Features;