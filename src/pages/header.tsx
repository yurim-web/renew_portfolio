import '../styles/header.css';
import '../utils/header.js';
import React, { useState } from 'react';

const GITHUB_SVG_PATH =
  'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z';

const GitHubLink = ({
  size,
  className,
  iconClassName,
  onClick,
  children,
}: {
  size: number;
  className: string;
  iconClassName: string;
  onClick?: () => void;
  children?: React.ReactNode;
}) => (
  <a
    href="https://github.com/yurim-web"
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    aria-label="GitHub Profile"
    onClick={onClick}
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={iconClassName}
    >
      <path d={GITHUB_SVG_PATH} />
    </svg>
    {children}
  </a>
);

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
          <h1
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ cursor: 'pointer' }}
          >
            YURIM'S WEB PORTFOLIO
          </h1>
        </div>
        <div className="nav_right">
          <ul className="nav_menu">
            <li>
              <a href="#about" className="nav_link" onClick={close_mobile_menu}>
                ABOUT ME
              </a>
            </li>
            <li>
              <a href="#strength" className="nav_link" onClick={close_mobile_menu}>
                STRENGTH
              </a>
            </li>
            <li className="nav_dropdown">
              <a href="#project" className="nav_link" onClick={close_mobile_menu}>
                PROJECTS
              </a>
              <ul className="nav_dropdown_menu">
                <li>
                  <a href="#professional" className="nav_dropdown_link" onClick={close_mobile_menu}>
                    Professional
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="nav_dropdown_link" onClick={close_mobile_menu}>
                    Learning
                  </a>
                </li>
                <li>
                  <a href="#web_design" className="nav_dropdown_link" onClick={close_mobile_menu}>
                    Web Design
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact" className="nav_link" onClick={close_mobile_menu}>
                CONTACT
              </a>
            </li>
          </ul>
          <div className="header_social">
            <GitHubLink size={24} className="github_link" iconClassName="github_icon" />
          </div>
        </div>
        <button
          className={`hamburger_button ${is_mobile_menu_open ? 'active' : ''}`}
          onClick={toggle_mobile_menu}
        >
          <span className="hamburger_line"></span>
          <span className="hamburger_line"></span>
          <span className="hamburger_line"></span>
        </button>
      </nav>
      <div className={`mobile_menu ${is_mobile_menu_open ? 'mobile_menu_open' : ''}`}>
        <ul className="mobile_nav_menu">
          <li>
            <a href="#about" className="mobile_nav_link" onClick={close_mobile_menu}>
              ABOUT ME
            </a>
          </li>
          <li>
            <a href="#strength" className="mobile_nav_link" onClick={close_mobile_menu}>
              STRENGTH
            </a>
          </li>
          <li>
            <a href="#project" className="mobile_nav_link" onClick={close_mobile_menu}>
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#contact" className="mobile_nav_link" onClick={close_mobile_menu}>
              CONTACT
            </a>
          </li>
          <li className="mobile_social">
            <GitHubLink
              size={28}
              className="mobile_github_link"
              iconClassName="mobile_github_icon"
              onClick={close_mobile_menu}
            >
              GitHub
            </GitHubLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
