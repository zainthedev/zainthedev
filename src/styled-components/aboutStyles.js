import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PortfolioSection } from './globalStyles';

export const About = styled(PortfolioSection)`
	display: flex;
	place-content: space-evenly;
	place-items: center;
	height: calc(100vh - 54px);
	@media (max-width: 768px) {
		flex-direction: column;
		place-content: end;
		height: (100vh - 54px);
	}
`;

export const MainImage = styled(motion.img)`
	width: 30vw;
	max-width: 100%;
	min-width: 280px;
	border-radius: 10px;
	box-shadow: 0px 0px 5px 0px #e1ce7a;
`;

export const Description = styled(motion.p)`
	width: 80%;
	border-top: solid 1px #1b998b;
	font-size: 1.25rem;
	padding-top: 10px;
	padding-bottom: 15px;
	line-height: 2rem;
	white-space: break-spaces;
`;
