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
                        <button onClick={()=> window.location = "https://be.synxis.com/?_ga=2.102065793.1000121752.1606552834-1702853238.1606552834&adult=1&arrive=2020-11-30&chain=27304&child=0&currency=AED&depart=2020-12-01&hotel=75043&level=hotel&locale=en-US&promo=HSPA&rooms=1"} className="btn-theme btn-book-now px-4 mt-4 py-2">Book Now</button>
                    </div>
                </header>
            </div>
        </React.Fragment>
    );
}

export default MainHeader;