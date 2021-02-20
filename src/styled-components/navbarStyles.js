import styled from 'styled-components';

export const Navbar = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	place-content: space-around;
	place-items: center;
	height: 53px;
	width: 100%;
	font-size: 1.5rem;
	background: #1b998b;
	box-sizing: border-box;
	@media (max-width: 768px) {
		bottom: 0;
		top: auto;
	}
`;

export const NavLink = styled.a``;
