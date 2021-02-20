import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavbarComponent } from './components/NavbarComponent';
import { AboutComponent } from './components/AboutComponent';
import './styles/reset.css';
import './styles/main.css';

export const Portfolio = () => {
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);

	console.log(aboutRef.current);

	useEffect(() => {
		console.log(aboutRef.current);
	}, []);

	return (
		<>
			<NavbarComponent
				aboutRef={aboutRef.current}
				projectsRef={projectsRef.current}
				contactRef={contactRef.current}
			/>
			<AboutComponent forwardedRef={aboutRef} />
		</>
	);
};
