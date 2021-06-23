import React from 'react';

export interface FooterProps {}

const Footer = () => {
  return (
    <footer>
      <p>
        Copyright &copy;2021 - Royal Rangers of Nigeria | All Rights Reserved
      </p>
      <h1>Hello from Footer</h1>
      <a
        className="App-link"
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google
      </a>
    </footer>
  );
};

export default Footer;
