import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <nav
      className='navbar navbar-expand-sm navbar-dark'
      style={{ backgroundColor: '#49635A' }}
    >
      <Link to='/' className='navbar-brand'>
        <h1>
          <i className={icon} />
          {title}
        </h1>
      </Link>

      <div className='navbar-nav'>
        <Link to='/' className='nav-item nav-link mr-auto'>
          Home
        </Link>
        <Link to='/About' className='nav-item nav-link'>
          About
        </Link>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: '',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
