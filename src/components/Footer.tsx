import React from 'react';
import styled from 'styled-components';

export interface FooterProps {}

const Footer = () => {
  return (
    <MyFooter>
      <p>
        Copyright &copy;{new Date().getFullYear()} - Royal Rangers of Nigeria |
        All Rights Reserved
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
    </MyFooter>
  );
};

export default Footer;

const MyFooter = styled.footer`
  @media (max-width: 600px) {
    & {
      padding-bottom: 5em;
    }
  }
`;
