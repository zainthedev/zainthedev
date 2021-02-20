import { useRef } from 'react';
import { motion } from 'framer-motion';
import { NavbarComponent } from './components/NavbarComponent';
import { AboutComponent } from './components/AboutComponent';
import { ProjectsComponent } from './components/ProjectsComponent';
import { ContactComponent } from './components/ContactComponent';
import './styles/reset.css';
import './styles/main.css';

export const Portfolio = () => {
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<>
			<NavbarComponent aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
			<AboutComponent forwardedRef={aboutRef} />
			<ProjectsComponent forwardedRef={projectsRef} />
			<ContactComponent forwardedRef={contactRef} />
		</>
	);
};
