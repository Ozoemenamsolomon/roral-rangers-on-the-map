import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';

export interface DesktopLayoutProps {}

const DesktopLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default DesktopLayout;

const Main = styled.main`
  min-height: 78.5vh;
`;
