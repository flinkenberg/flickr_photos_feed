import React from 'react';

import { Link } from 'react-router-dom';

const Header = ({content}) => {
  return (
    <div className="app-header container-fluid">
      <span className="header-title"><Link to="/photos">{content}</Link></span>
    </div>
  );
}

export default Header;
