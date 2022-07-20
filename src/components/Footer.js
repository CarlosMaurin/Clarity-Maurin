import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import "../components/Footer.css";


function Footer() {
    return (
        <>
            <footer className='container-fluid bg-dark d-flex align-items-center' >
                <div className='row d-flex mx-auto align-items-center w-100 flex-column flex-sm-row' >
                    <div className='col-4 d-flex align-items-center justify-content-center' >
                        <img src={logo} className="logo-footer" />
                    </div>
                    <div className='col-12 col-sm-8 text-light d-flex align-items-center flex-column justify-content-center' >
                        
                        <div className='row w-100' >
                            <div className='col-12 px-0 col-lg-6 mx-lg-auto' >
                                <ul className='px-0 d-flex justify-content-between lista-footer w-100' >
                                    <li><a href='#'>home</a></li>
                                    <li><a href='#'>categorias</a></li>  
                                    <li><a href='#'>medidas</a></li>  
                                    <li><a href='#'>contacto</a></li>  
                                </ul>
                            </div>
                            <div className='col-12 d-flex justify-content-center  redes-footer' >
                                {/*******INSTAGRAM******** */}
                                <a href='https://www.instagram.com/clarityjoyas/'><i className="fab fa-instagram"></i></a> 
                                {/*******FACEBOOK******** */}
                                <a href='https://www.facebook.com/search/top?q=clarity%20joyas'><i className="fab fa-facebook"></i></a>
                                {/*******WHATSAPP******** */}
                                <a href='#'><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <p className='mb-0 direccion'>Dirección: Maipú 150. Galería Rose Mary local 9</p>
                        </div>
                        
                    </div>
                    <div className='mt-2'>
                            <p className='mb-0 text-center firma text-light mt-md-4'>Designed by Carlos Maurin</p>
                        </div>
                </div>
                
            </footer>
        </>
    )
}

export default Footer