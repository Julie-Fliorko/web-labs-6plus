import React, {useState, useEffect}from "react";
import plate from "../../img/plate.jpg";
import {Link} from "react-router-dom";

import firebase from '../../../firebase/utils';


export default function ProductList(props){
    /*const [products, setProducts] = useState([])

    React.useEffect(()=>{
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = db.collection('products').get
            setProducts(data.docs.map(doc => {return {...doc.data(), id: doc.id} }));
        }
        fetchData()//
    }, [])*/

        /*const [products, setProducts] = React.useState([]);
      
        React.useEffect(() => {
          const unsubscribe = firebase
            .firestore()
            .collection("products")
            .onSnapshot((snapshot) => {
              const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              setProducts(data);
            });
        }, []);*/

    return(
        <div> 
            <div className='filter'>
                <label>Sort By:</label>
                <select>Price (ascending)</select>
                <select>Price (discending)</select>
                <select>Rating (ascending</select>
                <select>Rating (discending</select>
            </div>
            
        </div>
                )
}



/*<div className="items">
                {products.map(product => (
                    <div key={products.id} className="card">
                    <Link to={`/product/${product.id}`}><img src={product.image} alt={product.title}/></Link>
                    <div className="card_body">
                        <a href={`/product/${product.id}`} className="title"><h4>{product.title}</h4></a>
                        <div className="price">{product.price} UAH</div>
                        <div className="rating">{product.reviews} reviews</div>
                    </div>
                    </div>
                ))}
            </div>*/