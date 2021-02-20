import { PortfolioSection } from '../styled-components/globalStyles';

export const ContactComponent = ({ forwardedRef }) => {
	return (
		<PortfolioSection animate='visible' ref={forwardedRef}>
			Contact
		</PortfolioSection>
	);
};
