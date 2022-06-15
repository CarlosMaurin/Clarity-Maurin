import React from 'react'
// import ItemCount from './ItemCount'
import "../components/Item.css";
import { Link } from 'react-router-dom';

function Item( {item} ) {
    
    // const onAdd = (count) =>{
    //     alert(`Ud ha agregado ${count} items a su carrito`);
    // }
    
    return (
        <>

            <div className="card mb-5 col-lg-6 item-card mx-4" style={{width: 18 + "rem"}}>
                <img src={item.img1} className="card-img-top img-fluid mx-auto mt-4" alt="..." style={{width: 12 + "rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{item.titulo} </h5>
                    <p className="card-text">MATERIAL: {item.material} </p>
                    <p>Precio: {item.precio} </p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <button className='detalles bg-dark d-flex mx-auto'> <Link to={"/producto/" + item.id} >Ver detalles</Link></button>
                </div>
                {/* <ItemCount initial={1} stock={10} onAdd={onAdd}/> */}
            </div>

        </>
    )
}

export default Item