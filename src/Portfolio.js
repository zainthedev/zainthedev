import { useRef } from 'react';
import { ParticlesComponent } from './components/ParticlesComponent';
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
			<ParticlesComponent />
			<NavbarComponent projectsRef={projectsRef} contactRef={contactRef} />
			<AboutComponent forwardedRef={aboutRef} projectsRef={projectsRef} />
			<ProjectsComponent forwardedRef={projectsRef} />
			<ContactComponent forwardedRef={contactRef} />
		</>
	);
};
