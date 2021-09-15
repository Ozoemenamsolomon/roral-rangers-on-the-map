import React from 'react';
import styled from 'styled-components';

export interface FooterProps {}

const Footer = () => {
  return (
    <MyFooter>
      <p style={{ padding: '1rem 0rem' }}>
        Copyright &copy;{new Date().getFullYear()} - Royal Rangers of Nigeria |
        All Rights Reserved
      </p>
    </MyFooter>
  );
};

export default Footer;

const MyFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    & {
      padding-bottom: 5em;
    }
  }
`;
