import React from 'react';
import './homepage.css'
import Products from '../products/products.jsx'

export default class Homepage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <React.Fragment>
            <h1>Welcome, Pick your Product</h1>
            <Products />
        </React.Fragment>
    }
}