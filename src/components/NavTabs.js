import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Deployed')}

          className={currentPage === 'Deployed' ? 'nav-link active' : 'nav-link'}
        >
          Deployed Works
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Resume')}

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
