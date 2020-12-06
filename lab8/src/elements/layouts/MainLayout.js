import React from 'react';
import Header from "../pages/Homepage/header";
import Footer from "../pages/Footer/footer";
const MainLayout = props =>{
    return(
        <div>
            {props.children}
            <Footer/>
        </div>
    );
};

export default MainLayout