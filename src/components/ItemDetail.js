import React, { useContext } from 'react'
import "../components/ItemDetail.css";
import {Link} from "react-router-dom";
import ItemCount from './ItemCount';
import {useState} from "react";
import { CartContext } from '../context/CartContext';


function ItemDetail({producto} ) {
    
    const [count, setCount] = useState(1)

    const [showItemCount, setShowItemCount] = useState(false);
    const {isInCart, addItem, cart, getItemQuantity} = useContext(CartContext);

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
                <div>
                    <Link to="/home"><h3>Volver</h3> </Link>
                </div>
                <div className='row d-flex justify-content-center'>
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
                </div>

            </div>
        </>
    )
}

export default ItemDetail