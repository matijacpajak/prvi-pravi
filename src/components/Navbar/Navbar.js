import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo/Sedan-car.svg';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <img src={logo} href="logo-image" />
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                    </ul>
                    <button><NavLink to="/contact">Contact</NavLink></button>
                </nav>
            </div>
        );
    }
}

export default Navbar;