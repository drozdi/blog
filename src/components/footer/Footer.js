import styled from 'styled-components';
const FooterContainer = ({ className }) => <footer className={className}>footer</footer>;

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	grid-column: 1 / span 3;
	grid-row: 3 / span 1;
	padding: 20px 40px;
	background-color: #fff;
	box-shadow: rgb(0, 0, 0) 0px 2px 17px;
`;
