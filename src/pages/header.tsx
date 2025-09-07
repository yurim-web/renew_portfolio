import '../styles/header.css';
import '../utils/header.js';
import { useState } from 'react';

const Header = () => {
    const [is_mobile_menu_open, setIsMobileMenuOpen] = useState(false);

    const toggle_mobile_menu = () => {
        setIsMobileMenuOpen(!is_mobile_menu_open);
    };

    const close_mobile_menu = () => {
        setIsMobileMenuOpen(false);
    };

    return ( 
        <header className="header_container">
             <nav className="nav">
        <div className="nav_logo">
          <h1>YURIM'S WEB PORTFOLIO</h1>
        </div>
        <ul className="nav_menu">
          <li><a href="#about" className="nav_link" onClick={close_mobile_menu}>ABOUT ME</a></li>
          <li><a href="#skills" className="nav_link" onClick={close_mobile_menu}>SKILLS</a></li>
          <li><a href="#projects" className="nav_link" onClick={close_mobile_menu}>PROJECTS</a></li>
          <li><a href="#contact" className="nav_link" onClick={close_mobile_menu}>CONTACT</a></li>
        </ul>
        <button className={`hamburger_button ${is_mobile_menu_open ? 'active' : ''}`} onClick={toggle_mobile_menu}>
          <span className="hamburger_line"></span>
          <span className="hamburger_line"></span>
          <span className="hamburger_line"></span>
        </button>
      </nav>
      <div className={`mobile_menu ${is_mobile_menu_open ? 'mobile_menu_open' : ''}`}>
        <ul className="mobile_nav_menu">
          <li><a href="#about" className="mobile_nav_link" onClick={close_mobile_menu}>ABOUT ME</a></li>
          <li><a href="#skills" className="mobile_nav_link" onClick={close_mobile_menu}>SKILLS</a></li>
          <li><a href="#projects" className="mobile_nav_link" onClick={close_mobile_menu}>PROJECTS</a></li>
          <li><a href="#contact" className="mobile_nav_link" onClick={close_mobile_menu}>CONTACT</a></li>
        </ul>
      </div>
        </header>
     );
}
 
export default Header;