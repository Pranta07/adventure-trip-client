import React from "react";
import Banner from "../Banner/Banner";
import BlogPost from "../BlogPost/BlogPost";
import MapDirection from "../MapDirection/MapDirection";
import TourPlaces from "../TourPlaces/TourPlaces";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourPlaces></TourPlaces>
            <MapDirection></MapDirection>
            <BlogPost></BlogPost>
        </div>
    );
};

export default Home;
