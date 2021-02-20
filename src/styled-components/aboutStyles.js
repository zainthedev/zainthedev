import styled from 'styled-components';
import { PortfolioSection } from './globalStyles';

export const About = styled(PortfolioSection)`
	display: flex;
	place-content: space-evenly;
	place-items: center;
	height: calc(100vh - 54px);
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const MainImage = styled.img`
	width: 30vw;
	min-width: 320px;
	border-radius: 10px;
`;

export const Description = styled.p`
	width: 100%;
	border-top: solid 1px #1b998b;
	font-size: 1.25rem;
	padding-top: 10px;
`;
