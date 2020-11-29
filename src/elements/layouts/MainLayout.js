import React from 'react';
import Header from "../js/Homepage/header";
import Footer from "../js/footer";
const MainLayout = props =>{
    return(
        <div>
            {props.children}
            <Footer/>
        </div>
    );
};

export default MainLayout