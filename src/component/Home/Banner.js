import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div className="banner text-light">
            <div className="dark-overly">
                <div className="text-position">
                    <div className=" w-25 ">
                        <h1 className="title-font text-white-50">Welcome to Travelling!</h1>
                        <h4 className="title-des paragraph ">"An unspoiled land where you'll hardly meet another tourist"</h4>
                        <p className="paragraph">one of the least traveled destination in the world, the only thing absent here is the tourists and the tourism scams..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;