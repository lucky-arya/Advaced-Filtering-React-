import React from 'react'
import {FiHeart} from 'react-icons/fi'
import { AiOutlineShoppingCart,AiOutlineUserAdd } from 'react-icons/ai'

import './Nav.css'
import { GiShoppingCart } from 'react-icons/gi'

const Nav = ({ query, handleInputChange }) => {
    return (
        <nav className="nav-modern">
            <div className="nav-logo">
                <GiShoppingCart size={40} />
                <span className="brand">ShoeStore</span>
            </div>
            <div className="nav-search">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search for shoes, brands..."
                    value={query}
                    onChange={handleInputChange}
                />
            </div>
            <div className="profile-container">
                <a href="#" className="nav-icon-link">
                    <FiHeart size={25} className="nav-icon" />
                </a>
                <a href="#" className="nav-icon-link">
                    <AiOutlineShoppingCart size={25} className="nav-icon" />
                </a>
                <a href="#" className="nav-icon-link">
                    <AiOutlineUserAdd size={25} className="nav-icon" />
                </a>
            </div>
        </nav>
    );
};

export default Nav;