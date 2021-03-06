import React from 'react'
import { Link } from 'react-router-dom';
import '../components/CartWidget.css';
import {useContext} from "react";
import { CartContext } from '../context/CartContext';





function CartWidget() {

    const {getItemQuantity} = useContext(CartContext)

    return (
        <>
            <div className='d-flex' >
                <Link to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-bag-heart cart" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                </svg>
                </Link>
                <span className='text-dark fw-bold d-flex justify-content-center align-items-center cart-number'>{getItemQuantity()}</span>
            </div>
            {/* <span className='text-dark fw-bold p-1 rounded-circle cart-number'>{4}</span> */}
        </>
    )
}

export default CartWidget;
