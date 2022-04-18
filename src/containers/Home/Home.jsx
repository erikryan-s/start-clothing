import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import FavouritesMap from "../../components//FavouritesMap/FavouritesMap";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <FavouritesMap />
            <Footer />
        </div>
    );
};

export default Home;
