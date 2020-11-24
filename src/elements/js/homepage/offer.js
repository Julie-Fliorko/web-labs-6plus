import React from "react"
import plate from "../../img/plate.jpg"
import '../../style/homepage/offer.css'

const Offer =() =>{
    return(<div className="offer">
            <img src={plate} alt="offer image" className='offer_img'/>
            <div className="card_text">
                <h2 className="header">SALE!SALE!SALE!SALE!</h2>
                <h3 className="offer_text"><p>sale!sale!sale!sale!sale!sale!sale!sale!sale!sale!</p><p>sale!sale!sale!sale!sale!sale!sale!sale!sale!sale!</p><p>sale!sale!sale!sale!sale!sale!sale!sale!sale!sale!</p><p>sale!sale!sale!sale!sale!sale!sale!sale!sale!sale!</p><p>sale!sale!sale!sale!sale!sale!sale!sale!sale!sale!</p></h3>
            </div>
    </div> );
}

export default Offer