import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Products from "../../components/Prods/Products/Products";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Products />
            <Footer />
        </div>
    );
};

export default Home;
