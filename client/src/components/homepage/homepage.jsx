import React from 'react';
import products from '../../data/products.json';

export default class Homepage extends React.Component {
    render(){
        return <React.Fragment>
            <ul>
                {
                    products.map(function(items){
                        return<div>
                                <p>{items.name}</p>
                                <img src={items.url} alt="imageurl"></img>
                                <p>{items.price}</p>
                            </div>
                    })
                }
            </ul>
        </React.Fragment>
    }
}