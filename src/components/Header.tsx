import { NavLink as Linky } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';
import Logo from '../images/RR-ng.svg';

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
				widthInPercent={90}>
				<BrandLink to="/">
					<img
						height="60"
						src={Logo}
						title="Royal Rangers Nigeria Logo"
						alt="Royal Rangers Nigeria Logo"
					/>
				</BrandLink>
				<NavBar>
					<NavList>
						<NavItem>
							<NavLink to="/about">
								<span>About</span>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/info">
								<span>Info</span>
							</NavLink>
						</NavItem>{' '}
						<NavItem>
							{/* if user then show else null */}
							<NavLink to="/login">
								<span>Login</span>
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
	box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.472);
	background-color: #e70000;
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

const NavList = styled.ul`
	justify-content: space-around;
	display: flex;
`;
const NavItem = styled.li`
	list-style: none;
`;

const NavLink = styled(Linky)`
	color: #000;
	text-decoration: none;
	height: 100%;
	padding: 0 1.5em;
	color: white;
`;

const BrandLink = styled(NavLink)`
	padding: 0.2em 0.5em;
`;
