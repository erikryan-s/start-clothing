import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
                <Route path="/products/:productId">
                    <ProductPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
