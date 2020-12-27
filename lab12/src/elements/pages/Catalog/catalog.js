import React, {Component, useState, useEffect} from 'react'
import './catalog.scss'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import cart from "../../img/cart.svg";
import ProductList from "../Product/productList";
import ProductPage from "../Product/productPage";
import {ProductListContext} from "../../../context/ProductListContext";


export default function  Catalog() {

        return(
            <BrowserRouter>
            <div>
                <ProductListContext.Provider>
                    <Switch>
                        <Route path="/catalog">
                            <ProductList/>
                        </Route>
                        <Route path="catalog/:id">
                            <ProductPage/>
                        </Route>
                    </Switch>
                </ProductListContext.Provider>
            </div>
            </BrowserRouter>
        )

}
/*<header className="container">
                    <ul className="navbar">
                        <li className="nav-items homie" ><Link to="/">Home</Link></li>
                        <li className="nav-items catalogie"><Link to="/catalog">Catalog</Link></li>
                        <li className="nav-items cart"><img src={cart} alt="cart" className="cart_img"/><Link to="/cart">Cart<i className="fa fa-star"/></Link></li>
                    </ul>
                    <div className="logo"><h1>MY BOWLS</h1></div>
                </header>*/

