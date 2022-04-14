import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Favourites from "../../components/Favs/Favourites/Favourites";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Favourites />
            <Footer />
        </div>
    );
};

export default Home;
