import React from "react"
import {Link} from "react-router-dom";

import './header.scss'

import cart from '../../img/cart.svg'
import account from '../../img/user.svg'

const Header = props =>{
    return (
        <header className="container">
            <ul className="navbar">
                <li className="nav-item home" ><Link to="/">Home</Link></li>
                <li className="nav-item catalog"><Link to="/catalog">Catalog</Link></li>
                <li className="nav-item cart"><img src={cart} alt="cart" className="cart_img"/><Link to="/cart">Cart</Link></li>
            </ul>
            <div className="logo"><h1>MY BOWLS</h1></div>
            <Link to="/account"> <img src={account} alt="account" className="account_image"/> </Link>
        </header>

    );
}

export default Header;