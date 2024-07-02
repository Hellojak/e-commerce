import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../Assests/breadcrum_arrow.png';
import { Link } from 'react-router-dom';

const Breadcrums = (props) => {
    const { product } = props;

    return (
        <div className='breadcrum'>
            <Link to="/">HOME</Link> 
            <img src={arrow_icon} alt="Arrow icon" /> 
            <Link to="/">SHOP</Link> 
            <img src={arrow_icon} alt="Arrow icon" /> 
            <Link to={`/${product.category}`}>{product.category.toUpperCase()}</Link> 
            <img src={arrow_icon} alt="Arrow icon" /> 
            <span>{product.name}</span>
        </div>
    );
}

export default Breadcrums;
