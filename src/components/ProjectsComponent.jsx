import { PortfolioSection } from '../styled-components/globalStyles';

export const ProjectsComponent = ({ forwardedRef }) => {
	return (
		<PortfolioSection animate='visible' ref={forwardedRef}>
			Projects
		</PortfolioSection>
	);
};
