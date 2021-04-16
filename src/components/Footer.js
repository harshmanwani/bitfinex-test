import React from 'react';
import { Circle } from 'react-feather';

const Footer = () => {
  return (
    <div className="footer">
      <span className="text-link text-light text-sm">Full Book |</span>
      &nbsp;
      <span>
        <Circle size={12} color="green"/>
        &nbsp;
        <span className="text-light text-sm text-underline">Real Time</span>
      </span>
    </div>
  );
};

export default Footer;