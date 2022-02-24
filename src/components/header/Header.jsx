import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header--container">
      <ul className="wrapper">
        <li>
          <Link to="/" className="link--style">
            <p className="link-p">Create User</p>
          </Link>
        </li>
        <li>
          <Link to="/Create-category" className="link--style">
            <p className="link-p">Create Category</p>
          </Link>
        </li>
        <li>
          <Link to="/User-Categories" className="link--style">
            <p className="link-p">User Categories</p>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
