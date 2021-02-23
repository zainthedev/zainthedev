import { ParticlesComponent } from './ParticlesComponent';
import { About, MainImage, Description } from '../styled-components/aboutStyles';
import {
	ColumnWrapper,
	AboutTextColumnWrapper,
	Heading,
	Subheading,
	Button,
} from '../styled-components/globalStyles';
import { EmojiComponent } from './EmojiComponent';
import ZainImage from '../images/zainImage.png';
import arrowIcon from '../images/arrowIcon.svg';

export const AboutComponent = ({ projectsRef }) => {
	return (
		<About
			style={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeIn', duration: 0.5 }}
		>
			<ParticlesComponent />
			<AboutTextColumnWrapper>
				<Heading>Zain Hill</Heading>
				<Subheading>Frontend JavaScript developer</Subheading>
				<Description>
					I'm Zain, a frontend developer specialising in React with a new-found love for TypeScript.
					{'\n'}I enjoy building responsive, clean websites, learning new things, and making
					electronic music. <EmojiComponent label='Keyboard' symbol='🎹' />
				</Description>
				<Button onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>
					VIEW MY WORK <img style={{ width: '0.7rem' }} src={arrowIcon} alt='Arrow'></img>
				</Button>
			</AboutTextColumnWrapper>
			<ColumnWrapper>
				<MainImage src={ZainImage} alt='Zain standing in the snow in Nagano' />
			</ColumnWrapper>
		</About>
	);
};
