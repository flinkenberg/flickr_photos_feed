import React from 'react';

const Header = ({content}) => {
  return (
    <div className="app-header container-fluid">
      <h2>{content}</h2>
    </div>
  );
}

export default Header;
