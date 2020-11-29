import React, { Component } from 'react';
import MainHeader from 'components/MainHeader';
import SearchForm from 'components/SearchForm';
import ServiceCard from 'components/ServiceCard';
import { Container, Grid } from '@material-ui/core';
import DescriptionCard from 'components/DescriptionCard';
import HotelInfoCard from 'components/HotelInfoCard';
import AboutCard from 'components/AboutCard';
import CopyrightFooter from 'components/CopyrightFooter';

import ServiceTabs from 'components/ServicesTabs';
import RoomSlider from 'components/RoomSlider';
import GuestReviews from 'components/GuestReviews';

const room1 = require('assets/images/room1.png');
const room2 = require('assets/images/room2.png');
const room3 = require('assets/images/room3.png');
const room4 = require('assets/images/room4.png');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [
                {
                    title: "Executive One Bedroom Suite",
                    image: room1,
                    accomodation: {
                        left: 4,
                        sleeps: 2,
                        size: 'King',
                        area: 55,
                    },
                    additional_details_list: [
                        "Chic and expansive en-suite bedroom • Separate living and study area",
                        "Separate living and study area",
                        "Walk-in wardrobe, WhatsApp concierge service",
                        "Floor to ceiling windows, panoramic views",
                    ],
                    rate: 850.00,
                    room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                },
                {
                    title: "Diplomatic One Bedroom Suite",
                    image: room2,
                    accomodation: {
                        left: 4,
                        sleeps: 2,
                        size: 'King',
                        area: 55,
                    },
                    additional_details_list: [
                        "Imperial and decadent en-suite bedroom",
                        "Large Lounge area and a study space",
                        "Guest bathroom",
                        "Floor to ceiling windows with panoramic views",
                        "Option to add an adjoining room",
                    ],
                    rate: 900.00,
                    room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                },

            ]
        }
    }
    render() {
        const { cards } = this.state;
        return (
            <React.Fragment>
                <MainHeader />
                <RoomSlider />
                <div className="service-tabs-wrapper">
                    <h1 className="text-center p-2 mt-2">Explore our luxurious Facilities</h1>
                    <ServiceTabs />
                </div>
                {/* <div className="rooms-wrapper p-4">
                    <h1 className="title text-center">Select your suite or villa</h1>
                    {
                        this.state.rooms.map(x => (
                            <div className="room-item">
                                <HotelInfoCard title={x.title} image={x.image} rate={x.rate} accomodation={x.accomodation} additional_details_list={x.additional_details_list} room_details={x.room_details} />
                            </div>
                        ))
                    }
                </div> */}
                <GuestReviews />
                <AboutCard />
                <CopyrightFooter />
            </React.Fragment>
        );
    }
}

export default Home;