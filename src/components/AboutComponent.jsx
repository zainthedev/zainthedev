import { About, MainImage, Description } from '../styled-components/aboutStyles';
import {
	ColumnWrapper,
	TextColumnWrapper,
	Heading,
	Subheading,
	Button,
} from '../styled-components/globalStyles';
import { useViewportScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ZainImage from '../images/zainImage.jpg';
import arrowIcon from '../images/arrowIcon.svg';

export const AboutComponent = ({ forwardedRef, projectsRef }) => {
	const { scrollY } = useViewportScroll();
	const y1 = useTransform(scrollY, [0, 300], [0, 50]);

	const [ref, inView, entry] = useInView({
		/* Optional options */
		threshold: 0.5,
		triggerOnce: false,
	});

	return (
		<About style={{ y: y1 }} animate={inView ? 'visible' : 'hidden'} ref={ref}>
			<ColumnWrapper>
				<MainImage src={ZainImage} alt='Zain standing in the snow in Nagano' />
			</ColumnWrapper>
			<TextColumnWrapper>
				<Heading>Zain Hill</Heading>
				<Subheading>Frontend JavaScript developer</Subheading>
				<Description>
					I'm Zain, a frontend developer specialising in React with a newfound love for TypeScript.
					I enjoy making responsive, clean websites, learning new things, and being creative.
				</Description>
				<Button onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>
					VIEW MY WORK <img style={{ width: '0.7rem' }} src={arrowIcon} alt='Arrow'></img>
				</Button>
			</TextColumnWrapper>
		</About>
	);
};
