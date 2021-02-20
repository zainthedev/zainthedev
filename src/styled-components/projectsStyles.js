import styled from 'styled-components';
import { PortfolioSection } from './globalStyles';
import { motion } from 'framer-motion';

export const Projects = styled(PortfolioSection)`
	flex-direction: column;
	height: auto;
`;

export const Project = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
`;

export const ProjectImagesWrapper = styled.div``;

export const ProjectImage = styled.img`
	width: 30vw;
`;

export const ColorText = styled.b`
	color: rgb(204, 90, 113);
`;
