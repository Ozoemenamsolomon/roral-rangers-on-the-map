import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';

export interface HeaderProps {
  screenWidth: number;
}

const Header: React.FC<HeaderProps> = ({ screenWidth }) => {
  return (
    <MyHeader>
      <Container
        display="flex"
        justifyContent={screenWidth > 600 ? 'space-between' : 'center'}
        alignItems="center"
        width={90}
      >
        <BrandLink to="/">
          <h1>Header Logo</h1>
        </BrandLink>
        <NavBar>
          <NavList>
            <NavItem>
              <NavLink to="/about">
                <span>About</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/shop">
                <span>Shop</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/docs">
                <span>Docs</span>
              </NavLink>
            </NavItem>
          </NavList>
        </NavBar>
      </Container>
    </MyHeader>
  );
};

export default Header;

const MyHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;
`;
const NavList = styled.ul`
  justify-content: space-around;
  display: flex;
`;
const NavItem = styled.li`
  list-style: none;
`;

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  height: 100%;
  padding: 0 1.5em;
`;

const BrandLink = styled(NavLink)`
  padding: 1em 0.5em;
`;

const NavBar = styled.nav`
  @media (max-width: 600px) {
    & {
      bottom: 0;
      position: fixed;
      background-color: bisque;
      width: 100%;
      right: 0;
    }
  }
`;
