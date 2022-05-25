import React from 'react';
import logo from '../assets/img/logo.png';
import '../components/NavBar.css';

function NavBar (){
    return (
        <>
            <header className='header'>
                <div className='logo-container'>
                    <img src={logo} className='logo' alt=""/>
                </div>
                <nav className='nav'>
                    <ul className='list'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Anillos</a></li>
                        <li><a href="#">Pulseras</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default NavBar;


