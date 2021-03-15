import React from 'react'
import { db } from './firebase'
import './Product.css'



let retestrellas = (num) => {
    console.log(num);
    return num !== 0
      ? Array(num)
        .fill(null)
        .map((item, i) => {
          return <p>🌟</p>
        })
      : ''
}

function Product(props) {

    const addToCart = () => {
        const cartItem = db.collection('cart-items').doc(props.id);
        cartItem.get()
        .then((doc)=>{
            if(doc.exists){
                cartItem.update({
                    quantity: parseInt(doc.data().quantity) + 1
                })
            } else {
                cartItem.set({
                    title: props.title,
                    image: props.image,
                    price: props.price,
                    quantity: 1
                })
            }
        })
        
    }
    return (
        <div className="Product">
            <div className="Product-description">
                <span className="Product-title">{props.title}</span>
                <span className="Product-price">${props.price}</span>
                <span className="Product-rating">
                    {retestrellas(props.rating)}
                </span>
            </div>
            <img src={props.image} />
            <div className="Product-disp">
                <span className="Product-stock">Stock: {props.stock}</span>
            </div>
            <button onClick={addToCart} >Add to Cart</button>
        </div>
    )
}

export default Product
