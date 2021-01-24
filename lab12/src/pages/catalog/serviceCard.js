import React, { useState } from "react";
import { useList } from "react-firebase-hooks/database";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ItemInfo from "./itemInfo";
import {
    Wrapper,
    SelectionWrapper,
    Selection,
    FilterWrapper,
    FilterInput,
} from "./controlPanel.styled";
import "./loading.css";
import { connect } from "react-redux";

import './catalog_style.css'

function ServiceCard({ database }) {
    console.log("ServiceCard")
    let [data, loading] = useList(database);
    const [title, findByTitle] = useState("");
    const [colour, filterByColour] = useState("");

    data = data.filter((product)=> product.val().title.includes(title));
    data = data.filter((product) => product.val().color.includes(colour));

    return (
        <>
            <Wrapper>
                <SelectionWrapper color="grey">
                    Filter by rating:

                    <Selection onChange={(event) => filterByColour(event.target.value)}>
                        <option id="sortOption"></option>

                        <option id="sortOption" value="pink">Pink</option>
                        <option id="sortOption" value="white">White</option>
                        <option id="sortOption" value="blue" >Blue</option>
                        <option id="sortOption" value="black">Black</option>
                    </Selection>
                </SelectionWrapper>
                <FilterWrapper>
                    <FilterInput id="productName"  placeholder="Search ..."
    onChange={(event) => findByTitle(event.target.value)}
    />
                </FilterWrapper>
            </Wrapper>
            {loading && <div className="loader">Loading...</div>}
            <div>
                <div>
                    <BrowserRouter>
                    <Switch>
                        <Route path={"/catalog/info/"}>
                            <ItemInfo data={data} />
                        </Route>
                        <Route exact path={"/catalog"}>
                            <div className="items">
                                {data.map((product) => (
                                    <div className="card"
                                        key={product.key.id}>
                                        <img
                                            variant="top" src={product.val().image} alt="bowl" className="img"/>
                                        <div className="card-body">
                                            <>
                                                <div>{product.val().name}</div>
                                                <div>{product.val().title}</div>
                                                <div>
                                                    Price: {product.val().price}$
                                                </div>
                                                <div>Rating: {product.val().rating} ☆</div>
                                                <div>{product.val().color} colour</div>
                                                <Link to={"catalog/info/" + product.key} className="view_more">View more</Link>
                                            </>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Route>
                    </Switch>
                    </BrowserRouter>
                </div>
            </div>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        database: state.bowlStore.database,
    };
};

export default connect(mapStateToProps)(ServiceCard);