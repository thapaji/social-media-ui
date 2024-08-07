import React from 'react';
import logo from '../../assets/logo.svg';

export const Logo = () => {
  return (
    <img src={logo} alt="Logo" style={{ width: "80px", filter: 'brightness(0) invert(1)' }} />
  );
};