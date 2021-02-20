import { Navbar, NavLink } from '../styled-components/navbarStyles';

export const NavbarComponent = ({ projectsRef, contactRef }) => {
	const handleClick = (e) => {
		e.target.textContent === 'Projects'
			? projectsRef.current.scrollIntoView({ behavior: 'smooth' })
			: contactRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<Navbar>
			<NavLink onClick={handleClick}>Projects</NavLink>
			<NavLink onClick={handleClick}>Contact</NavLink>
		</Navbar>
	);
};
