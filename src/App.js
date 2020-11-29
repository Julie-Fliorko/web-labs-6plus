//import logo from './logo.svg';
import React from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom';

//layouts
import MainLayout from './elements/layouts/MainLayout';
import HomepageLayout from "./elements/layouts/HomepageLayout";
import data from "./data.json";
//elements
import Homepage from "./elements/js/Homepage/homepage";
import './default.scss';
import Cart from "./elements/js/Cart/cart";
import Catalog from "./elements/js/Catalog/catalog";

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