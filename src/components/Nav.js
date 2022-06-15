import React from 'react'
import logo from '../assets/img/logo.png';
import '../components/NavBar.css';
import CartWidget from './CartWidget';
import {Link} from "react-router-dom";


export default function Nav() {
    
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <Link to="/" className="navbar-brand" href="#"><img className='logo' src={logo}/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link to="/Home" className="nav-link active text-light" href="#">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                            <a className="nav-link text-light" href="#">Anillos</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light" href="#">Dijes</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light" href="#">Relojes</a>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorías
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/categoria/anillos" className="dropdown-item" href="#">Anillos</Link></li>
                                    <li><Link to="/categoria/dijes" className="dropdown-item" href="#">Dijes</Link></li>
                                    <li><Link to="/categoria/relojes" className="dropdown-item" href="#">Relojes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active text-light" href="#">Medidas</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active text-light" href="#">Contacto</a>
                            </li>

                            
                        </ul>
                        <form className="d-flex">
                            <input className=" me-0 ps-2 search" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn1" type="submit">Search</button>
                            <span className='ms-2'>
                                <CartWidget/>
                            </span>
                            <span className='text-dark fw-bold d-flex justify-content-center align-items-center cart-number'><p className='m-0'>{4}</p></span>
                        </form>
                        </div>
                    </div>
                </nav>
            </header>
            {/* <main>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 d-flex justify-content-center'>
                            <ItemListContainer greeting='Observe nuestras mejores PROMOS'/>
                        </div>
                    </div>
                </div>
            </main> */}
        </>
    )
}

