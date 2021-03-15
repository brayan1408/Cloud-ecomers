import React, {useEffect, useState} from 'react'
import './Home.css'
import Product from './Product'
import { db } from './firebase'

function Home() {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        db.collection('productos').onSnapshot((snapshot)=>{
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
                className="Oferta" 
                style={{backgroundImage: "url(https://thumbs.gfycat.com/JauntyBabyishKitten-small.gif)"}}>

            </div>
            <div 
                className="Home-banner" 
                style={{backgroundImage: "url(https://img.freepik.com/vector-gratis/fondo-blanco-hexagono-tecnologia-azul_1017-19366.jpg?size=626&ext=jpg)"}}>
            </div>

                <div className="Home-content">
                    <div className="Home-row">
                        {
                            products.map((product)=>(
                                <Product
                                    id={product.id}
                                    key={product.id}
                                    title={product.product.titulo}
                                    price={product.product.precio}
                                    rating={product.product.ratting}
                                    image={product.product.imagen}
                                />
                            ))
                        }
                    </div>
                    <div className="Home-row">
                       
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Home
