import styled from 'styled-components';
import { ColumnWrapper, TextColumnWrapper, Subheading } from './globalStyles';
import { motion } from 'framer-motion';

export const Projects = styled(motion.div)`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	@media (max-width: 768px) {
		flex-direction: column;
		place-content: end;
		height: max-content;
		justify-content: space-evenly;
		margin-top: 20px;
	}
`;

export const Project = styled(motion.div)`
	display: flex;
	flex-direction: row;
	width: 90%;
	align-self: center;
	justify-content: center;
	padding-top: 2em;
	padding-bottom: 2em;

	@media (min-width: 1440px) {
		width: 80%;
	}
	@media (min-width: 2560px) {
		width: 50%;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		place-content: end;
		place-items: center;
		height: max-content;
		justify-content: space-evenly;
		margin-top: 20px;
		width: 100%;
	}
`;

export const ProjectSubheading = styled(Subheading)`
	align-self: flex-start;
	margin-left: 20px;
	width: auto;
`;

export const ProjectImagesWrapper = styled(ColumnWrapper)`
	align-self: center;
	margin-bottom: 20px;
	width: 50%;
	flex: 1;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const WideProjectImage = styled.img`
	max-width: 20%;
	transition: all 0.1s ease-in-out;
	width: 100%;
	align-self: center;
	max-width: 600px;
	padding-right: 50px;
	@media (max-width: 768px) {
		display: block;
		max-width: 90%;
		max-height: 40%;
		margin-bottom: 10px;
		padding-right: 0px;
	}
`;

export const ProjectTextWrapper = styled(TextColumnWrapper)`
	margin-bottom: 1em;
	margin-left: 0px;
	margin-right: 0px;
	width: 50%;
	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const ColorText = styled.b`
	color: #4daa57;
	font-weight: 500;
`;

export const FeaturesText = styled.b`
	font-weight: 500;
`;
