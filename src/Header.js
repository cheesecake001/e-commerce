import React from "react";
import "./Header.css";
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="header">
          <Link to="/" style={{ textDecoration:"none" }}>
            <div className="header__logo">
                <LocalMallRoundedIcon className="header__logoImage" fontSize="large"/>
                <h2 className="header__logoTitle">eShop</h2>
            </div>
          </Link>
            

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchRoundedIcon className="header__searchIcon" />
      </div>
      
      <div className="header__nav">
        <Link to="/login" style={{ textDecoration:"none" }}>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <LocalGroceryStoreRoundedIcon/>
            <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
        </div>
    )
}

export default Header
