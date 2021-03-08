import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import Cart from './Cart'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { db } from './firebase'

function App() { 

  const [ cartItems, setCartItems ] = useState([]);

  useEffect(() => {
    db.collection('cart-items').onSnapshot((snapshot)=>{
      let tempCartItems = []
      snapshot.docs.map((doc)=>{
          tempCartItems.push({
              id: doc.id,
              cartItem: doc.data()
          })
      })
      setCartItems(tempCartItems)
    })
  }, [])

const [ storeItems, setStoreItems ] = useState([]);

  useEffect(() => {
    db.collection('productos').onSnapshot((snapshot)=>{
      let tempStoreItems = []
      snapshot.docs.map((doc)=>{
        tempStoreItems.push({
              id: doc.id,
              Item: doc.data()
          })
      })
      setStoreItems(tempStoreItems)
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Header 
          cartItems={cartItems} />
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route path="/">
            <Home storeItems={storeItems}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
