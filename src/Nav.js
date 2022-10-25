import React, { useEffect, useState } from 'react';
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                // alert('ji')
                handleShow(true);

            } else handleShow(false);

            // });
        })
    }, [])
    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <img
                className='nav__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                alt='Netflix logo' />
            <h4>
                Khan Abdul Rehman
            </h4>
        </nav>
    )
}

export default Nav
