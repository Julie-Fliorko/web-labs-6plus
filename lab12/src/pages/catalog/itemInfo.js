import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Wrapper, BackBtn, BuyBtn } from "./itemInfo.styled";
import { connect } from "react-redux";
import { addToCart } from "../cart/actions";

import './catalog_style.css'

function ItemInfo(props) {
    console.log('ItemInfo')
    var products = props.data;
    const key = window.location.pathname.split("/").pop();
    var selectedProduct = products.filter((itemSelected) =>
        itemSelected.key.includes(key)
    );
    console.log(selectedProduct)
    return selectedProduct.map((products) => (
        <div>
            <div className="back-btn">
                <Link to="/catalog">Back</Link>
            </div>
            <div>
                <img className="item-info-img" src={products.val().image} />
                <div>
                    <>
                        <div className="item-info-title">{products.val().title}</div>
                        <div className="item-info-price">
                           Price: {products.val().price}$
                        </div>
                        <div className="item-info-rating">Rating: {products.val().rating} ☆</div>
                        <div className="item-info-rating">Colors: {products.val().color}</div>
                        <div>{products.val().key}</div>
                        <button className="buy-btn" onClick={() => { props.addToCart(products.val().key);}}>
                            Buy!
                        </button>
                    </>
                </div>
            </div>
            <div className="long_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus
                fermentum ligula ultricies dictum. Donec justo metus, posuere eu leo ac,
                vestibulum luctus mi. Donec sit amet risus congue urna maximus dapibus.
            </div>
        </div>
    ));
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (key) => dispatch(addToCart(key)),
    };
};

export default connect(null, mapDispatchToProps)(ItemInfo);