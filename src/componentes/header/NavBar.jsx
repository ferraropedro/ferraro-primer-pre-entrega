import React from 'react';
import CartWidget from './CardWidget';


const Navbar = () => {
    return (
        <nav>
            <a href="/">
                <h1>Bicicletas Lucifer</h1>
            </a>
            <ul>
             <a href="/category/montaña">Montaña</a> 
             <a href="/category/clasica">clasica</a> 
             <a href="/category/urbana">Urbanas</a> 
             <a href="#">Contacto</a> 
            </ul>
            <a href="/cart">
            <CartWidget />
            </a>
        </nav>
    );
};

export default Navbar;