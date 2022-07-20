import React, { useState } from 'react';
import {useContext} from "react";
import { CartContext } from '../context/CartContext';
import "../components/Cart.css";
import { Link } from "react-router-dom";



function Cart() {
    const {emptyCart, cart, deleteItem, getItemQuantity, getItemPrice} = useContext(CartContext);

    return (
        <>
        

        {getItemQuantity() >= 1 ? 
            
            <section className="shopping-cart dark">
                <div className="container">
                    <div className="block-heading">
                        <h2>RESUMEN DE COMPRA</h2>
                    </div>
                    <div className="content d-flex flex-column flex-lg-row">
                        <div className='content-item'>
                            {cart.map(item => {
                                return(
                                    <div className='' key={item.id}>

                                        <div className="col-10 mx-auto col-md-12 col-lg-12">
                                            <div className="items">
                                                <div className="product">
                                                    <div className="row">
                                                        <div className="col-8 col-md-3 d-flex mx-auto">
                                                            <img className="img-fluid mx-auto d-block image" src={item.img1} />
                                                        </div>
                                                        <div className="col-md-9">
                                                            <div className="info">
                                                                <div className="row">
                                                                    <div className="col-md-4 product-name">
                                                                        <div className="product-name d-flex align-items-center justify-content-center">
                                                                            <span>{item.titulo} </span>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3 quantity d-flex flex-column align-items-center">
                                                                        <span>Cantidad:</span>
                                                                        <span>{item.count} </span>
                                                                    </div>
                                                                    <div className="col-md-2 price justify-content-center d-flex align-items-center mt-0">
                                                                        <span> ${item.precio * item.count} </span>
                                                                    </div>
                                                                    <div className='col-12 col-md-2 d-flex justify-content-center'>

                                                                    <div onClick={()=>{deleteItem(item.id)}} className='d-flex justify-content-center flex-column'>
                                                                        <button className="noselect">
                                                                            <span className="text">Borrar</span>
                                                                            <span className="icon">
                                                                                <i className="bi bi-trash"></i>
                                                                            </span>
                                                                        </button>
                                                                    </div>        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    	
                                )
                            })}
                        </div>


                        <div className=' summary-container'>
                            <div className="col-md-12 col-lg-12">
                                <div className="summary">
                                    <h3>Resumen</h3>
                                    <div className="summary-item"><span className="text">Subtotal</span><span className="price">${getItemPrice()} </span></div>
                                    <div className="summary-item"><span className="text">Flete</span><span className="price">Gratis</span></div>
                                    <div className="summary-item"><span className="text">Total</span><span className="price">${getItemPrice()} </span></div>
                                    <div className='botones'>
                                        <button type="button" className="btn  btn-block"><Link to="/checkout" className='boton-finalizar' >Finalizar compra</Link></button>
                                        <button type="button" className="btn  btn-block boton-vaciar" onClick ={()=> emptyCart()} >Vaciar carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                    </div>
                </div>
            </section>
            :
            <div className='empty-cart d-flex align-items-center flex-column'>
                <h1>SU CARRITO ESTÁ VACÍO</h1>
                <Link to="/Home">
                    <button className="learn-more mt-3">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Voler a Inicio</span>
                    </button>
                </Link>
            </div>
           

        }




























            {/* <section className="shopping-cart dark">
                <div className="container">
                    <div className="block-heading">
                        <h2>RESUMEN DE COMPRA</h2>
                    </div>
                    <div className="content d-flex">
                        <div>
                            {cart.map(item => {
                                return(
                                    <div className="" key={item.id}>

                                        <div className="col-md-12 col-lg-12">
                                            <div className="items">
                                                <div className="product">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <img className="img-fluid mx-auto d-block image" src={item.img1} />
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="info">
                                                                <div className="row">
                                                                    <div className="col-md-5 product-name">
                                                                        <div className="product-name d-flex align-items-center">
                                                                            <span>{item.titulo} </span>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3 quantity d-flex flex-column align-items-center">
                                                                        <span>Cantidad:</span>
                                                                        <span>{item.count} </span>
                                                                    </div>
                                                                    <div className="col-md-2 price d-flex align-items-center mt-0">
                                                                        <span> {item.precio} </span>
                                                                    </div>

                                                                    <div onClick={()=>{deleteItem(item.id)}} className='col-2 d-flex justify-content-center flex-column'>
                                                                        <button className="noselect">
                                                                            <span className="text">Borrar</span>
                                                                            <span className="icon">
                                                                                <i className="bi bi-trash"></i>
                                                                            </span>
                                                                        </button>
                                                                    
                                                                    
                                                                    
                                                                    </div>        







                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    	
                                )
                            })}
                        </div>
                        <div className='w-50'>
                            <div className="col-md-12 col-lg-12">
                                <div className="summary">
                                    <h3>Summary</h3>
                                    <div className="summary-item"><span className="text">Subtotal</span><span className="price">$360</span></div>
                                    <div className="summary-item"><span className="text">Discount</span><span className="price">$0</span></div>
                                    <div className="summary-item"><span className="text">Shipping</span><span className="price">$0</span></div>
                                    <div className="summary-item"><span className="text">Total</span><span className="price">$360</span></div>
                                    <button type="button" className="btn btn-primary btn-lg btn-block"><Link to="/checkout">Finalizar compra</Link></button>
                                </div>
                            </div>
                        </div>
                         
                    </div>
                </div>
            </section>
             */}












            {/* <div className='mt-5'><h1>Cart:</h1>{cart.map((item, index) =>{ return(
                <div key={index}>
                    <div className='ms-5 mt-5' >
                        <img src={item.img1} className="img-cart" />
                        <p>categoria: {item.categoria} </p>
                        <p>cantidad: {item.count}</p>
                        <p>Precio: {item.precio}</p>
                        <button onClick={()=>{deleteItem(item.id)}} >Eliminar de carrito</button><hr/>
                    </div>
                    
                </div>)})}
            </div>

                <div className='d-flex ' >
                    <h5>Cantidad total de unidades:</h5>
                    <p className='ms-3' >{getItemQuantity()}</p>
                </div>
                <div className='d-flex ' >
                    <h5>Costo total:</h5>
                    <p className='ms-3' >{getItemPrice()}</p>
                </div>

            <button onClick={()=> {emptyCart()} }>vaciar carrito</button>
            <br/>
            <br/>
            <button className='d-flex mx-auto mb-5' ><Link to="/checkout">Finalizar compra</Link></button> */}

        </>
    )
}

export default Cart