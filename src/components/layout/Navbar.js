import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar navbar-dark' style={{ backgroundColor: '#49635A' }}>
      <h1>
        <i className={icon} />
        {title}
      </h1>
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
