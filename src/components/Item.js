import React from 'react'
// import ItemCount from './ItemCount'
import "../components/Item.css";
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

function Item( {item} ) {
    
    // const onAdd = (count) =>{
    //     alert(`Ud ha agregado ${count} items a su carrito`);
    // }
    
    return (
        <>

            {/* <div className="row"> */}
                <div className="col-8 col-md-3 col-sm-6 mb-5">
                    <div className="product-grid">
                        <div className="product-image">
                            <div className="image">
                                <img className="pic-1" src={item.img1} />
                            </div>
                            {/* <span className="product-discount-label">-33%</span> */}
                            <ul className="product-links">

                                <li><span data-tip="Favoritos"><i className="fas fa-heart"></i></span></li>
                                <li><Link to={"/producto/" + item.id} ><span data-tip="Ver detalle"><i className="fa fa-search"></i></span></Link></li>

                                {/* <li><span data-tip="Ver detalle"><i className="fa fa-search"></i></span></li> */}
                            </ul>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><Link to={"/producto/" + item.id} className="title-item">{item.titulo}</Link></h3>
                            <div className="price">
                                {/* <span>$90.00</span>  */}
                                ${item.precio}
                            </div>
                            <div>
                                <Link to={"/producto/" + item.id} ><span className="add-to-cart">Ver detalles</span></Link>
                            </div>
                            {/* <a className="add-to-cart" href="#">Agregar al carrito</a> */}
                            {/* <ItemCount className="add-to-cart" /> */}
                        </div>
                    </div>
                </div>
            {/* </div> */}
















            {/* <div className="card mb-5 col-lg-6 item-card mx-4" style={{width: 18 + "rem"}}>
                <img src={item.img1} className="card-img-top img-fluid mx-auto mt-4" alt="..." style={{width: 12 + "rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{item.titulo} </h5>
                    <p className="card-text">MATERIAL: {item.material} </p>
                    <p>Precio: {item.precio} </p>
                    <button className='detalles bg-dark d-flex mx-auto'> <Link to={"/producto/" + item.id} >Ver detalles</Link></button>
                </div>
                <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            </div> */}

        </>
    )
}

export default Item