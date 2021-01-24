import React  from 'react';
import {Link} from 'react-router-dom';

import './header_style.css';
import '../default_style.css'

import cart from '../../images/cart.svg';

const Header = props =>{
    return(
        <header>
            <ul className="navbar">
                <li className="nav-item home" ><Link to="/">Home</Link></li>
                <li className="nav-item catalog"><Link to="/catalog">Catalog</Link></li>
                <li className="nav-item cart"><img src={cart} alt="cart" className="cart_img"/><Link to="/cart">Cart</Link></li>
            </ul>
            <div className="logo"><h1>MY BOWLS</h1></div>
        </header>
    );
}
Header.defaultProps ={
    currentUser: null
};
export default Header;