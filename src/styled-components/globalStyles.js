import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ColumnWrapper = styled(motion.div)`
	display: flex;
	width: 30%;
	flex-direction: column;
	align-items: center;
	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const TextColumnWrapper = styled(ColumnWrapper)`
	align-self: center;
	width: 25%;
	padding-top: 20px;
	padding-bottom: 10px;
	@media (max-width: 1440px) {
		width: 50%;
	}
	@media (max-width: 768px) {
		width: 95%;
	}
`;

export const AboutTextColumnWrapper = styled(TextColumnWrapper)`
	background: #291f1e;
	color: #f1fbff;
`;

export const Heading = styled(motion.h1)`
	display: inline;
	place-self: center;
	font-weight: 500;
	font-size: 4rem;
	@media (max-width: 768px) {
		width: inherit;
		text-align: center;
	}
`;

export const Subheading = styled(motion.h2)`
	align-self: center;
	text-align: center;
	font-weight: 500;
	font-size: 1.75rem;
	padding-bottom: 7px;
	border-bottom: solid 1px #4daa57;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	place-items: center;
	padding-top: 20px;
	width: 100%;
	justify-content: space-evenly;
`;

export const Button = styled.button`
	display: flex;
	place-content: center;
	align-items: center;
	border: solid 1px #f1fbff;
	border-radius: 5px;
	min-width: 30%;
	max-width: 300px;
	outline: none;
	padding-top: 6px;
	padding-bottom: 6px;
	margin-bottom: 10px;
	font-size: 1.25rem;
	font-weight: 600;
	text-align: center;
	color: white;
	background: rgb(214, 34, 70);
	cursor: pointer;
	user-select: none;
	transition: all 0.1s ease-in-out;
	@media (max-width: 1024px) {
		width: 70%;
	}
	@media (max-width: 768px) {
		width: 70%;
	}
	:hover {
		background: #4daa57;
	}
`;
