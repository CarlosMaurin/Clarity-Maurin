import React from 'react'
import logo from '../assets/img/logo.png';
import '../components/NavBar.css';
import CartWidget from './CartWidget';
import {Link} from "react-router-dom";
import Category from './Category';
import { useState } from 'react';


export default function Nav() {
    
    const [navbar, setNavbar] = useState(false);
    const [toggler, setToggler] = useState(true); 

    const cambiarNav = ()=>{
        if(window.scrollY >= 80){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }
    window.addEventListener("scroll", cambiarNav);


    return (
        <>
            <section id='header'>
                <nav className={navbar ? "navbar navbar-expand-lg navbar-dark fixed-top fixed-active" : "navbar navbar-expand-lg navbar-dark fixed-top"}>
                    <div className="container">
                        <Link to="/" className="navbar-brand"><img className='logo' src={logo}/></Link>
                        <button onClick={()=> {setToggler(!toggler)} } className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {toggler ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>} 
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link to="/Home" className="nav-link active text-light">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-light" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorías
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Category/>
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
                            </form>
                        </div>
                    </div>
                </nav>
                <div className='my-auto text-light ps-3' >
                    <h1 className='titulo-header d-flex flex-column' >LATEST <br/>FASHION<br/> TRENDS 2022 </h1>
                    <button className='boton-header' >
                        <Link to="/categorias" className='link-header' >Comprar ahora</Link>
                    </button>
                </div> 

            </section>
            
            
        </>
    )
}

