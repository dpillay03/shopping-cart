import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'
import shoppingCart from '../../assets/cart.png'
import Products from '../products/products.jsx'

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <React.Fragment>
            <div className="home-header">
                <h1>Welcome, Pick your Product</h1>
                <p id="cart-link"><Link to="/cart">View Cart &#x1F6D2;</Link></p>
            </div>
            <Products />
        </React.Fragment>
    }
}