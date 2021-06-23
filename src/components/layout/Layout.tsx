import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';

export interface LayoutProps {}

const Layout: React.FC = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, [screenWidth]);
  return (
    <>
      <Header screenWidth={screenWidth} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

const Main = styled.main`
  padding-top: 5em;
  min-height: 150vh;
`;
