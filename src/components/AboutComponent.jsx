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
import { EmojiComponent } from './EmojiComponent';
import ZainImage from '../images/zainImage.jpg';
import arrowIcon from '../images/arrowIcon.svg';

export const AboutComponent = ({ forwardedRef, projectsRef }) => {
	const { scrollY } = useViewportScroll();
	const y1 = useTransform(scrollY, [0, 300], [0, 0]);

	const [ref, inView] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	return (
		<About style={{ y: y1 }} animate={inView ? 'visible' : 'hidden'} ref={ref}>
			<TextColumnWrapper>
				<Heading>Zain Hill</Heading>
				<Subheading>Frontend JavaScript developer</Subheading>
				<Description>
					I'm Zain, a frontend developer specialising in React with a newfound love for TypeScript.
					{'\n'}I enjoy building responsive, clean websites, learning new things, and making
					electronic music. <EmojiComponent label='Keyboard' symbol='🎹' />
				</Description>
				<Button onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>
					VIEW MY WORK <img style={{ width: '0.7rem' }} src={arrowIcon} alt='Arrow'></img>
				</Button>
			</TextColumnWrapper>
			<ColumnWrapper>
				<MainImage src={ZainImage} alt='Zain standing in the snow in Nagano' />
			</ColumnWrapper>
		</About>
	);
};
