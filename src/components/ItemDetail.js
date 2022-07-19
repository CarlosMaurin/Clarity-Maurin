import React, { useContext } from 'react'
import "../components/ItemDetail.css";
import {Link} from "react-router-dom";
import ItemCount from './ItemCount';
import {useState} from "react";
import { CartContext } from '../context/CartContext';


function ItemDetail({producto} ) {
    
    const [count, setCount] = useState(1)

    const [showItemCount, setShowItemCount] = useState(false);
    const {isInCart, addItem, cart, getItemQuantity, subTotal} = useContext(CartContext);

    const onAdd = () =>{
        alert(`Ud ha agregado ${count} items a su carrito`);
        setShowItemCount(true);
        isInCart(producto.id);
        addItem(producto, count);
        // getItemQuantity()
    }
    
    return (
        <>
            <div className='container-fluid item-box'>
                <div className='container-fluid' >
                    <div className='row' >
                        <div className='col-8 mx-auto'>
                            <div className='row'>
                                <div className='col-8 pe-0' >
                                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner producto-img">
                                            <div className="carousel-item active">
                                            <img src={producto.img1} className="d-block w-100 img-fluid" alt="..."/>
                                            </div>
                                            <div className="carousel-item">
                                            <img src={producto.img2} className="d-block w-100 img-fluid" alt="..."/>
                                            </div>
                                            <div className="carousel-item">
                                            <img src={producto.img3} className="d-block w-100 img-fluid" alt="..."/>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon next-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span className="carousel-control-next-icon next-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden ">Next</span>
                                        </button>
                                        </div>
                                </div>
                                <div className='col-4 descripcion-container pt-4'>
                                    <h2>{producto.titulo}</h2>
                                    <p>${producto.precio}</p>
                                    <p>{producto.descripcion} </p>
                                    <p>{producto.marca}</p>
                                    <p>{producto.material}</p>
                                    <div className='d-flex flex-column'>
                                        {showItemCount ? 
                                            <>
                                                <Link to="/cart">
                                                    <button className='boton-carrito mb-2 mx-auto'>
                                                        <div className="boton-carrito-container">
                                                            <div className="svg-wrapper">
                                                                <i className="bi bi-bag-heart-fill"></i>
                                                            </div>
                                                        </div>
                                                        <span>Ir al carrito</span>
                                                    </button>
                                                </Link>
                                                <button className="cta" onClick={()=> setShowItemCount(false)}>
                                                    <span className="hover-underline-animation"> Seguir comprando </span>
                                                    <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                                                    <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                                                    </svg>
                                                </button>
                                            </> : 
                                            <ItemCount stock={10} onAdd={onAdd} count={count} setCount={setCount} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div></div>
                <div></div>
                <div></div>
                <div></div>








                
                
                
                
                
                
                
                
                
                {/* <div className='row d-flex justify-content-center'>
                    <div className='col-11'>
                        <div className='row row-card justify-content-center'>
                            <div className='col-6'>
                                <div className='row'>
                                    <div className='col-12 d-flex justify-content-center my-4'>
                                        <img className='img1' src={producto.img1} />
                                    </div>
                                    <div className='col-12 d-flex justify-content-center mb-3'>
                                        <img className='img2' src={producto.img2} />
                                        <img className='img3' src={producto.img3} />

                                    </div>
                                </div>

                            </div>
                            <div className='col-5'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <h1>{producto.titulo} </h1>
                                        <p>{producto.descripcion}</p>
                                        <p>{producto.marca}</p>
                                        <p>{producto.material}</p>
                                        <h3>{producto.precio} </h3>
                                    </div>
                                    <div className='col-12'>
                                        {showItemCount ? 
                                            <>
                                                <button className='p-1'>
                                                    <Link to="/cart">Ir al carrito</Link>
                                                </button>
                                                <button className='p-1 ms-3' onClick={()=> setShowItemCount(false)}>Seguir comprando</button>
                                            </> : 
                                            <ItemCount stock={10} onAdd={onAdd} count={count} setCount={setCount} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default ItemDetail