import React, {useContext} from 'react'
import { Link, useParams } from "react-router-dom";
import cart from "../../img/cart.svg";

import {ProductListContext} from "../../../context/ProductListContext";

function ProductPage(props){

    const {all_products} = useContext(ProductListContext);
    const {product_id} = useParams();
    console.log("product id: "+product_id)
    const currentProduct = all_products.find(product =>(product._id === product_id))
    return(

        <div>
            <header className="container">
                <ul className="navbar">
                    <li className="nav-items homie" ><Link to="/">Home</Link></li>
                    <li className="nav-items catalogie"><Link to="/catalog">Catalog</Link></li>
                    <li className="nav-items cart"><img src={cart} alt="cart" className="cart_img"/><Link to="/cart">Cart<i className="fa fa-star"/></Link></li>
                </ul>
                <div className="logo"><h1>MY BOWLS</h1></div>
            </header>
            <div>
                {currentProduct._id}
            </div>
        </div>
    )
}
export default ProductPage;
/*const product = data.products.find(x => x._id === props.match.params.id);
    if (!product) {
        return <div> Product Not Found</div>;
    }*/