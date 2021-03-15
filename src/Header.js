import React from 'react'
import './Header.css'
import Logo from './logo2.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header(props) {

    const getCount = () => {
        // init count with 0
        // loop through all the items
        // add quantity to count
        // return it
        let count = 0;
        props.cartItems.forEach(item => {
            count += parseInt(item.cartItem.quantity)
        });
        return count;
    }

    return (
        <div className="Header">
            {/* Logo */}
            <Link to="/">
                <div className="Header-logo">
                    <img src={Logo} />
                </div>
            </Link>
            {/* Address */}
            <div className="Header-optionAddress">
                {/* icon */}
                <div className="Header-option">
                    
                    <span className="Header-optionLineTwo">¡Bienvenido!</span>

                </div>

            </div>
            {/* Search */}
            <div className="Header-search">
                <input className="Header-searchInput" type="text" />
                <div className="Header-searchIconContainer">
                    <SearchIcon />
                </div>  
            </div>
            <div className="Header-navItems">

                    {/* Orders */}
                <div className="Header-option">
                    <span className="Header-optionLineOne">Tus</span>
                    <span className="Header-optionLineTwo">Compras</span>
                </div>  
                    {/* Cart */}
                <Link to="/cart">
                    <div className="Header-optionCart">
                        <ShoppingBasketIcon />
                        <span className="Header-cartCount">{getCount()}</span>
                    </div>
                </Link>
            </div>
  
            
        </div>
    )
}

export default Header

