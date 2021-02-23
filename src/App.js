import { useRef } from 'react';
import { NavbarComponent } from './components/NavbarComponent';
import { AboutComponent } from './components/AboutComponent';
import { ProjectsComponent } from './components/ProjectsComponent';
import { ContactComponent } from './components/ContactComponent';
import './styles/reset.css';
import './styles/main.css';

export const App = () => {
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<>
			<NavbarComponent projectsRef={projectsRef} contactRef={contactRef} />
			<AboutComponent forwardedRef={aboutRef} projectsRef={projectsRef} />
			<ProjectsComponent forwardedRef={projectsRef} />
			<ContactComponent forwardedRef={contactRef} />
		</>
	);
};
