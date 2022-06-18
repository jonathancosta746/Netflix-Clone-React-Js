import React from "react";
import './Style.css';
import Logo from '../../Images/logo.png';
import Users from '../../Images/Users/crazy.png';


export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={Logo} alt="Netflix"></img>
                </a>
            </div>
            <div className="Header--user">
            <a href="/">
                    <img src={Users} alt="Usuário"></img>
                </a>
            </div>
        </header>
    );
}

