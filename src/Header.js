import React from 'react'
import './Header.css'
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
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Star_Television_logo.svg/245px-Star_Television_logo.svg.png"} />
                </div>
            </Link>
            {/* Address */}
            <div className="Header-optionAddress">
                {/* icon */}
                <div className="Header-option">
                    <span className="Header-optionLineOne">Bienvenido,</span>
                    <span className="Header-optionLineTwo">Busca algo</span>
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
                    {/* Login name */}
                <div className="Header-option">
                    <span className="Header-optionLineOne">Hola :D</span>
                    <span className="Header-optionLineTwo">Cuenta & Lista</span>
                </div>  
                    {/* Orders */}
                <div className="Header-option">
                    <span className="Header-optionLineOne">Devoluciones </span>
                    <span className="Header-optionLineTwo">& Pedidos</span>
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

