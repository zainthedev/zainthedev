import { Navbar, NavLink } from '../styled-components/navbarStyles';

export const NavbarComponent = ({ aboutRef, projectsRef, contactRef }) => {
	const handleClick = (e) => {
		if (e.target.textContent === 'About') {
			aboutRef.current.scrollIntoView();
		} else if (e.target.textContent === 'Projects') {
			console.log(projectsRef);
			projectsRef.current.scrollIntoView();
		} else {
			contactRef.current.scrollIntoView();
		}
	};

	return (
		<Navbar>
			<NavLink onClick={handleClick}>Projects</NavLink>
			<NavLink onClick={handleClick}>Contact</NavLink>
		</Navbar>
	);
};
