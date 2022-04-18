import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import AllProducts from "./containers/AllProducts/AllProducts";
import ProductPage from "./containers/ProductPage/ProductPage";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="products" element={<AllProducts />}>
                        <Route
                            index
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <p>Select a product</p>
                                </main>
                            }
                        />
                        <Route path=":productId" element={<ProductPage />} />
                    </Route>
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <h1>404: There's nothing here!</h1>
                            </main>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
};

export default App;
