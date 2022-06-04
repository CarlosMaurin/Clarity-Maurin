import React from 'react'
import logo from '../assets/img/logo.png';
import '../components/NavBar.css';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';



export default function Nav() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img className='logo' src={logo}/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active text-light" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light" href="#">Contacto</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light" href="#">Disabled</a>
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

