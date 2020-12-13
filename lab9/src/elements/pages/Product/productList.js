import React from "react";
import plate from "../../img/plate.jpg"

import cart from "../../img/cart.svg";
import data from "../../../data.js"

export default function ProductList(props){
    const {product} = props;
    return(
        <div className="items">
            {data.products.map((product) =>(
                <div key={product._id} className="card">
                <a href={`/product/${product._id}`}><img src={plate} alt={product.title}/></a>
                <div className="card_body">
                    <a href={`/product/${product._id}`} className="title"><h4>{product.title}</h4></a>
                    <div className="price">{product.price} UAH</div>
                    <div className="rating">{product.reviews} reviews</div>
                </div>
            </div>))}

        </div>
    )
}
/*<div className="items">
                    {
                        data.products.map((product) =>(
                            <ProductList key={product._id} product={product}/>
                        ))
                    }
                </div>*/