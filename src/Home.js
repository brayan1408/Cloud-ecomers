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
                className="Oferta" 
                style={{backgroundImage: "url(https://thumbs.gfycat.com/JauntyBabyishKitten-small.gif)"}}>

            </div>
            <div 
                className="Home-banner" 
                style={{backgroundImage: "url(https://img.freepik.com/vector-gratis/fondo-blanco-hexagono-tecnologia-azul_1017-19366.jpg?size=626&ext=jpg)"}}>
            </div>
                
                
                <div className="Home-content">
                    
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
