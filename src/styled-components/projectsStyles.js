import styled from 'styled-components';
import { ColumnWrapper, PortfolioSection, TextColumnWrapper } from './globalStyles';
import { motion } from 'framer-motion';

export const Projects = styled(PortfolioSection)`
	flex-direction: column;
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
	justify-content: space-evenly;
	margin-top: 50px;
	padding-bottom: 50px;
	@media (max-width: 768px) {
		flex-direction: column;
		place-content: end;
		place-items: center;
		height: max-content;
		justify-content: space-evenly;
		margin-top: 20px;
	}
`;

export const ProjectImagesWrapper = styled(ColumnWrapper)`
	width: 34%;
	flex-direction: row;
	place-content: space-evenly;
	margin-bottom: 20px;
	@media (max-width: 1024px) {
		flex-direction: column;
	}
	@media (max-width: 768px) {
		width: 90%;
		flex-direction: row;
	}
`;

export const ProjectImage = styled.img`
	max-width: 35%;
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.1s ease-in-out;
	@media (max-width: 1024px) {
		max-width: 60%;
		margin-bottom: 10px;
	}
	@media (max-width: 768px) {
		max-width: 30%;
		max-height: 40%;
		margin-bottom: 0px;
	}
	:hover {
		transform: scale(1.1);
		box-shadow: 0px 0px 5px 0px #e1ce7a;
	}
`;

export const ProjectTextWrapper = styled(TextColumnWrapper)`
	width: 35%;
	@media (max-width: 1440px) {
		width: 45%;
	}
	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const ColorText = styled.b`
	color: #e1ce7a;
	font-weight: 500;
`;
