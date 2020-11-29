import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactStars from "react-rating-stars-component";

const avatar1 = require("assets/images/avatar-lady.png")

const reviews = [
    {
        name: "ChiChi",
        rating: 5,
        title: "Welcome to Paradise",
        review: "If Monet were to paint water lilies at night then no better place than to paint from the terrace of H Resort's Trader Vics with a background of birds singing their hearts out. Gardens of the hotel are beautiful,and well kept with the majestic mountains in the background. Then you have the beautiful white sandy beach on the other side of the hotel steps from your room. Our suite room was enormous with very comfortable bed, top quality sheets and even a pillow menu. Great housekeeping always room cleaning, copious bottled water etc. Our room had a terrace and sofa for two overlooking the gardens. Beautiful spa with a huge sauna and modern gym. The beach area although public is kept spotless and not single piece of plastic or rubbish. Turn up for the weekly cocktails held by Johannes the GManager to meet him and his team, who are are passionate about delivering the best and they love their island. Buffet breakfast is at Vascos with your feet almost in the sand and the breaking of the waves. A big thank you to Samuel on the Egg Station and his colleague for making me Eggs Benedict or super omelettes. There is a wide variety of dishes and non-stop great coffee. Breakfast served between 7am to 11am with never any sense of being rushed to finish and the buffet pretty much full and tidy until the last minute. So important for other time zone travellers and getting a lie-in. Thank you all at H. We had a great rest and have come back (very reluctantly), but so refreshed.",
        image: avatar1,
        stayDate: new Date().toLocaleDateString()
    }
]

const GuestReviews = (props) => {
    return (
        <div className="guest-reviews-wrapper p-5 text-center">
            <h1>Guest Reviews</h1>
            <Carousel
                dynamicHeight={false}
                showStatus={false}
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={false}
                className="guest-carousel"
            >
                {
                    reviews.map(x => (
                        <div className="review-wrapper w-75 mx-auto py-5">
                            <img className="gt-img" src={x.image} alt={x.name} />
                            <h5 className="gt-name">{x.name}</h5>
                            <ReactStars classNames="gt-rating" count={5} value={x.rating} edit={false} size={30} />
                            <h4 className="gt-title">{x.title}</h4>
                            <p className="gt-review">{x.review}</p>
                            <p className="gt-date">Date of Stay: {x.stayDate}</p>

                            <button className="btn-read-more mt-4">Read More</button>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default GuestReviews;