import React from 'react';
import Header from "../pages/Homepage/header";
import Footer from "../pages/Footer/footer"
const HomepageLayout = props =>{
    return(
        <div>
            {props.children}
            <Footer/>
        </div>
    );
};

export default HomepageLayout