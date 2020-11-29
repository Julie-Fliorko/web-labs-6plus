import React, {Component} from 'react'
import '../../style/Catalog/catalog.scss'
import product from "../Product/product"
import plate from "../../img/plate.jpg"
import Header from "../Homepage/header";
import {Link} from "react-router-dom";
import cart from "../../img/cart.svg";
class Catalog extends Component{
    render(){
        return(
            <div>
                <header className="container">
                    <ul className="navbar">
                        <li className="nav-items homie" ><Link to="/">Home</Link></li>
                        <li className="nav-items catalogie"><Link to="/catalog">Catalog</Link></li>
                        <li className="nav-items cart"><img src={cart} alt="cart" className="cart_img"/><Link to="/cart">Cart</Link></li>
                    </ul>
                    <div className="logo"><h1>MY BOWLS</h1></div>
                </header>
                <div className="items">
                    <div className="card">
                        <a href="/"><img src={plate} alt="plate"/></a>
                        <div className="card_body">
                            <a href={product}><h2>Cute bowl</h2></a>
                            <div className="price">1UAH</div>
                        </div>
                    </div>
                    <div className="card">
                        <a href="/"><img src={plate} alt="plate"/></a>
                        <div className="card_body">
                            <a href={product}><h2>Cute bowl</h2></a>
                            <div className="price">1UAH</div>
                        </div>
                    </div> <div className="card">
                    <a href="/"><img src={plate} alt="plate"/></a>
                    <div className="card_body">
                        <a href={product}><h2>Cute bowl</h2></a>
                        <div className="price">1UAH</div>
                    </div>
                </div> <div className="card">
                    <a href="/"><img src={plate} alt="plate"/></a>
                    <div className="card_body">
                        <a href={product}><h2>Cute bowl</h2></a>
                        <div className="price">1UAH</div>
                    </div>
                </div> <div className="card">
                    <a href="/"><img src={plate} alt="plate"/></a>
                    <div className="card_body">
                        <a href={product}><h2>Cute bowl</h2></a>
                        <div className="price">1UAH</div>
                    </div>
                </div> <div className="card">
                    <a href="/"><img src={plate} alt="plate"/></a>
                    <div className="card_body">
                        <a href={product}><h2>Cute bowl</h2></a>
                        <div className="price">1UAH</div>
                    </div>
                </div> <div className="card">
                    <a href="/"><img src={plate} alt="plate"/></a>
                    <div className="card_body">
                        <a href={product}><h2>Cute bowl</h2></a>
                        <div className="price">1UAH</div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Catalog