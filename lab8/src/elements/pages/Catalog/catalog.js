import React, {Component} from 'react'
import './catalog.scss'
import {BrowserRouter, Link, Route} from 'react-router-dom';
import cart from "../../img/cart.svg";
import ProductList from "../Product/productList";
import ProductPage from "../Product/productPage";

class Catalog extends Component{

    render(){
        return(
            <BrowserRouter>
            <div>
                <header className="container">
                    <ul className="navbar">
                        <li className="nav-items homie" ><Link to="/">Home</Link></li>
                        <li className="nav-items catalogie"><Link to="/catalog">Catalog</Link></li>
                        <li className="nav-items cart"><img src={cart} alt="cart" className="cart_img"/><Link to="/cart">Cart<i className="fa fa-star"/></Link></li>
                    </ul>
                    <div className="logo"><h1>MY BOWLS</h1></div>
                </header>
                <Route path="/product/:id" component={ProductPage}/>
                <Route path="/catalog" component={ProductList} exact/>
                <ProductList/>
            </div>
            </BrowserRouter>
        )
    }
}

export default Catalog

