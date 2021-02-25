import styled from 'styled-components';
import { ColumnWrapper, TextColumnWrapper } from './globalStyles';
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
	flex-direction: column;
	width: 60%;
	align-self: center;
	justify-content: center;
	margin-top: 50px;
	padding-bottom: 50px;
	border-bottom: solid 1px #291f1e;
	@media (max-width: 1024px) {
		width: 70%;
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

export const ProjectImagesWrapper = styled(ColumnWrapper)`
	width: 80%;
	align-self: center;
	flex-direction: row;
	place-content: space-evenly;
	margin-bottom: 20px;
	@media (max-width: 1024px) {
		width: 100%;
	}
`;

export const ProjectImage = styled.img`
	max-width: 20%;
	border-radius: 10px;
	cursor: pointer;
	margin-right: 50px;
	transition: all 0.1s ease-in-out;
	@media (max-width: 768px) {
		display: none;
		max-width: 100%;
		max-height: 40%;
		margin-bottom: 0px;
	}
	:hover {
		transform: scale(1.05);
	}
`;

export const WideImagesWrapper = styled.div`
	display: flex;
	width: 100%;
	align-self: center;
	flex-direction: column;
`;

export const WideProjectImage = styled(ProjectImage)`
	width: 100%;
	margin-bottom: 20px;
	align-self: center;
	max-width: 100%;
	@media (max-width: 768px) {
		display: block;
		max-width: 90%;
		max-height: 40%;
		margin-bottom: 10px;
		margin-right: 0px;
	}
`;

export const ProjectTextWrapper = styled(TextColumnWrapper)`
	width: 100%;
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
