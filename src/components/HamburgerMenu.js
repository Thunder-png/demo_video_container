import React from 'react';
import "./HamburgerMenu.css"
import 'animate.css';

const HamburgerMenu = ({ isOpen, onClose, onClick, onSkipTo20Seconds }) => {
    return (
        <div className="hamburger-menu">
            <input onClick={onClose} id="checkbox2" type="checkbox" checked={isOpen} onChange={onClick} />
            <label className="toggle toggle2" htmlFor="checkbox2">
                <div id="bar4" className="bars"></div>
                <div id="bar5" className="bars"></div>
                <div id="bar6" className="bars"></div>
            </label>
            <h5 className='menu-head'>Menu</h5>
            <ul className={`offcanvas-menu ${isOpen ? 'open' : ''}`}>
                <li className={`animate__animated ${isOpen ? 'animate__fadeInDown' : 'animate__fadeOutDown'}`} style={{ '--animate-delay': '0.8s', '--animate-slower': '2s' }}><a href='#' onClick={onSkipTo20Seconds}>20. Saniyeye Git</a></li>
                <li className={`animate__animated ${isOpen ? 'animate__fadeInDown' : 'animate__fadeOutDown'}`} style={{ '--animate-delay': '1.2s', '--animate-slower': '2s' }}>BINAMIZIN GENEL ÖZELLIKLERI</li>
                <li className={`animate__animated ${isOpen ? 'animate__fadeInDown' : 'animate__fadeOutDown'}`} style={{ '--animate-delay': '1.6s', '--animate-slower': '2s' }}>ULAŞIM</li>
            </ul>
        </div>
    );
};

export default HamburgerMenu;
