import React from 'react';
import CartWidget from './CardWidget';

const Navbar = () => {
    return (
        <nav>

            <h1>Bicicletas Lucifer</h1>
            <ul>
                <li> <a href="">Montaña</a></li>
                <li> <a href="">Ruta</a></li>
                <li> <a href="">Urbanas</a></li>
                <li> <a href="">Contacto</a></li>
            </ul>
            <CartWidget />

        </nav>
    );
};

export default Navbar;