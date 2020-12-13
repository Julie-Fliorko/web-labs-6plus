//import logo from './logo.svg';
import React from "react";
import './App.css';
import {Link, Switch, Route} from "react-router-dom"
//layouts
import MainLayout from './elements/layouts/MainLayout';
import HomepageLayout from "./elements/layouts/HomepageLayout";
import data from "./data.js";
//elements
import Homepage from "./elements/pages/Homepage/homepage";
import './default.scss';
import Cart from "./elements/pages/Cart/cart";
import Catalog from "./elements/pages/Catalog/catalog";

function App() {
    return (

        <div>
            <div className="App">
                <Switch>
                    <Route exact path="/" render={() => (
                        <HomepageLayout>
                            <Homepage/>
                        </HomepageLayout>
                    )}/>
                    <Route path="/catalog" render={() => (
                        <MainLayout>
                            <Catalog/>
                        </MainLayout>
                    )}/>
                    <Route  path="/cart" render={() => (
                        <MainLayout>
                            <Cart/>
                        </MainLayout>
                    )}/>
                </Switch>
            </div>
        </div>);
}
export default App;