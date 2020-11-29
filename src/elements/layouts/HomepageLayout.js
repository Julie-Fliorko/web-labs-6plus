import React from 'react';
import Header from "../js/Homepage/header";
import Footer from "../js/footer"
const HomepageLayout = props =>{
    return(
        <div>
            {props.children}
            <Footer/>
        </div>
    );
};

export default HomepageLayout