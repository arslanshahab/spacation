import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const room1 = require('assets/images/room1.png');
const room2 = require('assets/images/room2.png');
const room3 = require('assets/images/room3.png');
const room4 = require('assets/images/room4.png');

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "70px",
};

const rooms = [
    {
        title: "Junior Suite King",
        image: room1,
        accomodation: {
            left: 4,
            sleeps: 2,
            size: 'King',
            area: 55,
        },
        additional_details_list: [
            "King bed & Lounge area.",
            "Bathroom with bath, shower & toiletries.",
            "Air conditioning & Free WiFi.",
            "Balcony overlooking the resort gardens",
            "Tea/coffee facilities & Minibar"
        ],
        rate: 1087.81,
        original: 1200.05,
        room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Garden Junior Suite King",
        image: room2,
        accomodation: {
            left: 4,
            sleeps: 2,
            size: 'King',
            area: 55,
        },
        additional_details_list: [
            "King bed &amp; Lounge area.",
            "King bed &amp; Lounge area.",
            "Bathroom with bath, shower &amp; toiletries.",
            "King bed &amp; Lounge area.",
            "Air conditioning &amp; Free WiFi.",
        ],
        rate: 500.27,
        original: 347.02,
        room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Garden Junior Suite Twin",
        image: room3,
        accomodation: {
            left: 4,
            sleeps: 2,
            size: 'King',
            area: 55,
        },
        additional_details_list: [
            "King bed &amp; Lounge area.",
            "King bed &amp; Lounge area.",
            "Bathroom with bath, shower &amp; toiletries.",
            "King bed &amp; Lounge area.",
            "Air conditioning &amp; Free WiFi.",
        ],
        rate: 1305.37,
        original: 1500.78,
        room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Grand Beach Villa With King Bed",
        image: room4,
        accomodation: {
            left: 4,
            sleeps: 2,
            size: 'King',
            area: 55,
        },
        additional_details_list: [
            "King bed &amp; Lounge area.",
            "King bed &amp; Lounge area.",
            "Bathroom with bath, shower &amp; toiletries.",
            "King bed &amp; Lounge area.",
            "Air conditioning &amp; Free WiFi.",
        ],
        rate: 439.06,
        original: 600.95,
        room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },

]

const RoomSlider = () => {
    return (
        <div className="room-slider-wrapper py-4">
            <h1 className="section-title">Relax, Rejuvenate with our Spa-cation Packages</h1>
            <p className="w-75 text-center mx-auto">Turn your staycation into a blissful escape with a Suite Stay and 120 minutes of relaxing spa time starting from AED 850. Rejuvenate at the award-winning Mandara Spa and choose from our range of body treatments.</p>
            <Carousel
                dynamicHeight={false}
                showStatus={false}
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={false}
                centerMode
                centerSlidePercentage={50}
                className="room-carousel"
            >
                {
                    rooms.map(x => (
                        <div>
                            <img src={x.image} />
                            <div className="slide-content py-3">
                                <h1>{x.title}</h1>
                                <ul>
                                    {x.additional_details_list.map(li => (
                                        <li>{li}</li>
                                    ))}
                                </ul>
                                <h3 className="rate my-3">
                                    AED {x.rate}
                                </h3>
                                <h5 className="rate my-3">
                                    <del style={{opacity: 0.8}}>AED {x.original}</del>
                                </h5>
                                <button className="btn-book-now my-2" onClick={()=> window.location = "https://be.synxis.com/?_ga=2.102065793.1000121752.1606552834-1702853238.1606552834&adult=1&arrive=2020-11-28&chain=27304&child=0&currency=AED&depart=2020-11-29&hotel=75043&level=hotel&locale=en-US&promo=HSPA&rooms=1"}>BOOK NOW</button>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default RoomSlider;