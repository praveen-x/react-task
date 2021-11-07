import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
function Header() {
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
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">hello Praveen</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/* 2nd */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3rd */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th */}
                <Link to="/" className="header__link">
                    <div className="header__optionBasket">   
                        <ShoppingBasketIcon />                     
                        <span className="header__optionLineTwo header__basket">0</span>
                    </div>
                </Link>

            </div>

            
        </nav>
    )
}

export default Header
