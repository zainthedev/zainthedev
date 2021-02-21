import styled from 'styled-components';
import { PortfolioSection } from './globalStyles';

export const Contact = styled(PortfolioSection)`
	display: flex;
	flex-direction: column;
	place-content: space-evenly;
	place-items: center;
	min-height: calc(100vh - 54px);
	@media (max-width: 768px) {
		flex-direction: column;
		place-content: end;
		height: max-content;
		justify-content: space-evenly;
		margin-top: 20px;
		min-height: 100vh;
	}
`;

export const ContactInfo = styled.div`
	display: flex;
	flex-direction: column;
	background: #2c363f;
	border-radius: 10px;
	place-items: center;
	max-width: 100vw;
`;

export const ContactText = styled.h2`
	font-size: 2.5rem;
	padding-bottom: 20px;
	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`;

export const Icon = styled.img`
	width: 5vw;
	min-width: 100px;
	cursor: pointer;
	transition: all 0.1s ease-in-out;
	:hover {
		transform: scale(1.2);
	}
`;
