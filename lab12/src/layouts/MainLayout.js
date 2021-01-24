import React from 'react';
import Header from '../componnents/header/header';
import Footer from '../componnents/footer/footer'

const MainLayout = props =>{
    return(
        <div>
            <Header {...props}/>
            <div className="main">
                {props.children}
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;