import React, {useEffect, useState} from 'react'
import './Home.css'
import Product from './Product'
import { db } from './firebase'

function Home(props) {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProducts = []
            snapshot.docs.map((doc)=>{
                tempProducts.push({
                    id: doc.id,
                    product: doc.data()
                })
            })
            setProducts(tempProducts)
        })
    }, [])


    return (
        <div className="Home">
            <div className="Home-container">
                <div 
                    className="Home-banner" 
                    style={{backgroundImage: "url(https://2.bp.blogspot.com/-QTd5li0eITw/UkLM49wSpHI/AAAAAAAASZ0/qCC7tswbRv8/s1600/Descargar+Pack+Impresionantes+fondos+abstractos+%2528140%2529.jpg)"}}>

                </div>

			
                <div className="Home-content">
	        <div className="Home-row">
                        {
                            products.map((product)=>(
                                <Product
                                    id={product.id}
                                    key={product.id}
                                    title={product.product.title}
                                    price={product.product.price}
				    rating={product.product.rating}
                                    image={product.product.image}
	    			    stock={product.product.stock}
                                />
                            ))
                        }
                    </div>
                    <div className="Home-row">
                        {props.storeItems.map((item)=>{
                            return <Product 
                                id={item.Item.id}
                                title={item.Item.titulo}
                                price={item.Item.precio}
                                rating={item.Item.rating}
                                image={item.Item.imagen}
				stock={item.Item.stock}
                            />
                        })}
                    </div>
                   
                </div>
            </div>

            
        </div>
    )
}

export default Home
