import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
	display: flex;
	width: 100%;
	height: calc(50vh - 54px);
	place-content: center;
	place-items: center;
	margin-top: 50px;
	margin-bottom: 200px;
	@media (max-width: 768px) {
		flex-direction: column;
		place-content: end;
		height: max-content;
		justify-content: space-evenly;
		margin-top: 20px;
		min-height: 100vh;
	}
`;

export const MainImage = styled(motion.img)`
	width: 12vw;
	max-width: 100%;
	min-width: 200px;
	border-radius: 100%;
	@media (max-width: 768px) {
		margin-top: 20px;
	}
`;

export const Description = styled(motion.p)`
	margin-left: 20px;
	margin-right: 20px;
	border-top: solid 1px #4daa57;
	font-size: 1.25rem;
	padding-top: 10px;
	padding-bottom: 15px;
	line-height: 1.5rem;
	white-space: break-spaces;
	height: max-content;
	height: 100%;
	@media (max-width: 768px) {
		width: 90%;
		padding-top: 10px;
		padding-bottom: 15px;
	}
`;
