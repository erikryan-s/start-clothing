import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import AllProducts from "./containers/AllProducts/AllProducts";
import ProductPage from "./containers/ProductPage/ProductPage";
import ProductsOutlet from "./components/ProductsOutlet/ProductsOutlet";
import HomeOutlet from "./components/HomeOutlet/HomeOutlet";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomeOutlet />}>
                        <Route index element={<Home />} />
                        <Route path="products" element={<ProductsOutlet />}>
                            <Route index element={<AllProducts />} />
                            <Route
                                path=":productId"
                                element={<ProductPage />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
