import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>    {/*une ternaire, si la nav est active, tu lui rajoute une class, sinon tu fais rien */}
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A propos</li>
                </NavLink>
                <NavLink to="/blog" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Blog</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;