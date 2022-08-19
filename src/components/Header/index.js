import React from "react";
import './Style.css';
import Logo from '../../Images/logo.png';
import Users from '../../Images/Users/crazy.png';


const Header = ({black}) => {
    return (
        <header className={black ? 'blackground--color' : ''}>
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
};

export default Header

