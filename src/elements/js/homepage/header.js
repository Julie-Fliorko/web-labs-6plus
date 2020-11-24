import React from "react"
import '../../style/homepage/header.scss'
import cart from '../../img/cart.svg'

const Header = props =>{
    return (
        <header className="container">
            <ul className="navbar">
                <li className="nav-item home" ><a href="#">Home</a></li>
                <li className="nav-item catalog"><a href="">Catalog</a></li>
                <li className="nav-item cart"><img src={cart} alt="cart" className="cart_img"/><a href="">Cart</a></li>
            </ul>

            <div className="logo"><h1>MY BOWLS</h1></div>
        </header>

    );
}

export default Header;