import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface HeaderProps {}

const Header = () => {
  return (
    <header>
      <BrandLink to="/">
        <h1>Hello from Header Page</h1>
      </BrandLink>
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/docs">Docs</NavLink>
      </nav>
    </header>
  );
};

export default Header;

const NavLink = styled(Link)`
  color: #000;
`;

const BrandLink = styled(NavLink)``;
