import React from 'react';
import './homepage_style.css'
import plate from '../../images/plate.jpg'

const Homepage = props => {
    return (
        <div className="offer">
            <div><img src={plate} className='offer_img'/></div>
            <div className="card_text">
                <h2 className="header">SALE!SALE!SALE!SALE!</h2>
                <h3 className="offer_text"><p>sale!sale!sale!sale!sale!sale!sale!sale!sale!sale!</p><p>sale!sale!sale!sale!sale!sale!sale!sale!sale!sale!</p><p>sale!sale!sale!sale!sale!sale!sale!sale!sale!sale!</p><p>sale!sale!sale!sale!sale!sale!sale!sale!sale!sale!</p><p>sale!sale!sale!sale!sale!sale!sale!sale!sale!sale!</p></h3>
            </div>
    </div> 
    );
}

export default Homepage