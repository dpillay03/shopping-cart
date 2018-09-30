import React from 'react';
import './products.css';
import products from '../../data/products.json';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <React.Fragment>
            <ul>
                {
                    products.map(function (items) {
                        let handleClick = () => {
                            console.log('clicked', items.id);
                        };
                        return <li>
                            <div onClick={handleClick} className="item-container">
                                <p className="product-id">{items.id}</p>
                                <p className="product-name">{items.name}</p>
                                <img className="product-img" src={items.url} alt="imageurl"></img>
                                <p className="product-price">{items.price}</p>
                            </div>
                        </li>
                    })
                }
            </ul>
        </React.Fragment>
    }
}