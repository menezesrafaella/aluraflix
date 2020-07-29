import React from 'react';
import Logo from '../../assets/Logo.png'
import './Menu.css'
import ButtonLink from './ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="">
            <img src={Logo} className="Logo" alt="Logo Netflix"/>
            </a>

            <Button as="a" className="ButtonLink" href="/" >
                Novo video
            </Button>
        </nav>
    );
}

export default Menu;