import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import './cart.scss';

import cart from '../../img/cart.svg'
import arrow from'../../img/left-arrow.svg'
import Header from '../Homepage/header';

class Cart extends Component{
    render(){
        return(
            <div>
                <div>
                    <div className="go_back_btn">
                        <img src={arrow} alt="arrow"/>
                        <Link to="/catalog" className="go_back_to_catalog">Go back to Catalog</Link>
                    </div>
                    <div className="cart_list">
                        <div>
                            <h3 className="text">Your shopping bag has:</h3>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}

export default Cart
