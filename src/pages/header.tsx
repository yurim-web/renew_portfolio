import '../styles/header.css';
import '../utils/header.js';
const Header = () => {
    return ( 
        <header className="header_container">
             <nav className="nav">
        <div className="nav_logo">
          <h1>YURIM'S WEB PORTFOLIO</h1>
        </div>
        <ul className="nav_menu">
          <li><a href="#about" className="nav_link">ABOUT ME</a></li>
          <li><a href="#skills" className="nav_link">SKILLS</a></li>
          <li><a href="#projects" className="nav_link">PROJECTS</a></li>
          <li><a href="#contact" className="nav_link">CONTACT</a></li>
        </ul>
      </nav>
        </header>
     );
}
 
export default Header;