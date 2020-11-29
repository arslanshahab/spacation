import React, { Component } from 'react';
import Navbar from './Navbar';
const MainHeader = (props) => {
    return (
        <React.Fragment>
            <div className="header-wrapper">
                <Navbar />
                <header className="text-center">
                    <div className="title">
                        <h1 className="text-center">The Ultimate Suite <br /> Spa-cation at The <br /> H Dubai</h1>
                        <button className="btn-theme btn-book-now px-4 mt-4 py-2">Book Now</button>
                    </div>
                </header>
            </div>
        </React.Fragment>
    );
}

export default MainHeader;