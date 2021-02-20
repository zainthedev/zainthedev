import { About, MainImage, Description } from '../styled-components/aboutStyles';
import { ColumnWrapper, Heading, Subheading } from '../styled-components/globalStyles';
import ZainImage from '../images/zainImage.jpg';

export const AboutComponent = ({ forwardedRef }) => {
	return (
		<About ref={forwardedRef}>
			<ColumnWrapper>
				<MainImage src={ZainImage} alt='Zain standing in the snow in Nagano'></MainImage>
			</ColumnWrapper>
			<ColumnWrapper>
				<Heading>Zain Hill</Heading>
				<Subheading>Frontend JavaScript developer</Subheading>
				<Description>
					I'm Zain, a frontend developer specialising in React with a newfound love for TypeScript.
					I enjoy building beautiful, responsive websites, learning new things, and being creative.
				</Description>
			</ColumnWrapper>
		</About>
	);
};
