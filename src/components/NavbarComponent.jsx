import { Navbar, NavLink } from '../styled-components/navbarStyles';

export const NavbarComponent = () => {
	return (
		<Navbar>
			<NavLink>About</NavLink>
			<NavLink>Portfolio</NavLink>
			<NavLink>Contact</NavLink>
		</Navbar>
	);
};
