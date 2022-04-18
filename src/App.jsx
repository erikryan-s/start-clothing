import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter,
} from "react-router-dom";
import Home from "./containers/Home/Home";
import AllProducts from "./containers/AllProducts/AllProducts";
import ProductPage from "./containers/ProductPage/ProductPage";

const App = () => {
    return (
        <BrowserRouter forceRefresh={true}>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/products">
                    <AllProducts />
                </Route>
                <Route path="/product/:id">
                    <ProductPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
