import styled from 'styled-components';

export const Navbar = styled.div`
	color: #f1fbff;
	display: flex;
	place-content: space-evenly;
	place-items: center;
	height: 53px;
	width: 50%;
	font-size: 1.5rem;
	box-sizing: border-box;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const NavLink = styled.a`
	cursor: pointer;
	:hover {
		color: rgba(204, 90, 113, 1);
	}
`;
