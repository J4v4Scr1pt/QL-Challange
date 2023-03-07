import styled from "styled-components";

const StyledButton = styled.button`
	margin-top: 100px;
	color: rgb(219, 62, 177);
	border: 6px solid rgb(219, 62, 177);
	border-radius: 15px;
	padding: 8px 15px;
	background-color: black;
	cursor: pointer;
	letter-spacing: 3px;
	font-weight: 900;
	filter: drop-shadow(rgb(219, 62, 177) 0px 0px 15px) drop-shadow(rgb(219, 62, 177) 0px 0px 50px)
		contrast(2) brightness(2);
	transition: all 0.25s ease 0s;

	&:hover {
		color: white;
		background-color: #db3eb1;
		filter: drop-shadow(0 0 20px #db3eb1) contrast(2) brightness(2);
	}
	&:active {
		transform: scale(0.98);
	}
`;

type Props = {
	onClick: () => void;
	children: string | JSX.Element;
};

const Button = ({ onClick, children }: Props) => <StyledButton {...{ onClick }}>{children}</StyledButton>;

export default Button;
