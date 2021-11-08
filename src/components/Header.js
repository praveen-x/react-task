<<<<<<< HEAD
import React, { useState } from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();
=======
import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
function Header() {
>>>>>>> 09f43dbcb28a75b08e92923b1ce99432e1098d6c
    return (
        <nav className="header">
            {/* logo on left */}
            <Link to="/">
                <img className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="amazonlogo"
            />
            </Link>

            {/* Search Box*/}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* side links*/}
            <div className="header__nav">

                {/* 1st */}                
<<<<<<< HEAD
                <Link to="/sign-in" className="header__link">
=======
                <Link to="/" className="header__link">
>>>>>>> 09f43dbcb28a75b08e92923b1ce99432e1098d6c
                    <div className="header__option">
                        <span className="header__optionLineOne">hello Praveen</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/* 2nd */}
<<<<<<< HEAD
                <Link to="/return-and-orders" className="header__link">
=======
                <Link to="/" className="header__link">
>>>>>>> 09f43dbcb28a75b08e92923b1ce99432e1098d6c
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3rd */}
<<<<<<< HEAD
                <Link to="/your-prime" className="header__link">
=======
                <Link to="/" className="header__link">
>>>>>>> 09f43dbcb28a75b08e92923b1ce99432e1098d6c
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th */}
<<<<<<< HEAD
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">   
                        <ShoppingBasketIcon />                     
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
=======
                <Link to="/" className="header__link">
                    <div className="header__optionBasket">   
                        <ShoppingBasketIcon />                     
                        <span className="header__optionLineTwo header__basket">0</span>
>>>>>>> 09f43dbcb28a75b08e92923b1ce99432e1098d6c
                    </div>
                </Link>

            </div>

            
        </nav>
    )
}

export default Header
