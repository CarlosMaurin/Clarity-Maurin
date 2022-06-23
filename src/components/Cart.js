import React from 'react';
import {useContext} from "react";
import { CartContext } from '../context/CartContext';
import "../components/Cart.css";



function Cart() {
    const {emptyCart, cart, deleteItem, getItemQuantity, getItemPrice} = useContext(CartContext);
    return (
        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='mt-5'><h1>Cart:</h1>{cart.map((item, index) =>{ return(
                <div key={index}>
                    <div className='ms-5 mt-5' >
                        <img src={item.img1} className="img-cart" />
                        <p>categoria: {item.categoria} </p>
                        <p>cantidad: {item.count}</p>
                        <p>Precio: {item.precio}</p>
                        <button onClick={()=>{deleteItem(item.id)}} >Eliminar de carrito</button><hr/>
                    </div>
                    
                </div>)})}</div>
                <div className='d-flex ' >
                    <h5>Cantidad total de unidades:</h5>
                    <p className='ms-3' >{getItemQuantity()}</p>
                </div>
                <div className='d-flex ' >
                    <h5>Costo total:</h5>
                    <p className='ms-3' >{getItemPrice()}</p>
                </div>

            <button onClick={()=> {emptyCart()} }>vaciar carrito</button>
        </>
    )
}

export default Cart