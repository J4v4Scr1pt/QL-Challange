import styled, { keyframes } from "styled-components";

const FormWrapper = styled.div`
	width: 400px;
	padding: 40px;
	background: rgba(0, 0, 0, 0.5);
	box-sizing: border-box;
	box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
	border-radius: 10px;
	& > h2 {
		margin: 0 0 30px;
		padding: 0;
		color: #fff;
		text-align: center;
	}
`;

const InputWrapper = styled.div`
	position: relative;
	& > input {
		width: 100%;
		padding: 10px 0;
		font-size: 16px;
		color: #fff;
		margin-bottom: 30px;
		border: none;
		border-bottom: 1px solid #fff;
		outline: none;
		background: transparent;
	}
	& > label {
		position: absolute;
		top: 0;
		left: 0;
		padding: 10px 0;
		font-size: 16px;
		color: #fff;
		pointer-events: none;
		transition: 0.5s;
	}
	&:focus-within > label {
		top: -20px;
		left: 0;
		color: #03e9f4;
		font-size: 12px;
	}
`;
const BtnAnim1 = keyframes`
0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
`;
const BtnAnim2 = keyframes`
0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
`;
const BtnAnim3 = keyframes`
0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
`;
const BtnAnim4 = keyframes`
0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
`;
const SubmitButton = styled.a`
	position: relative;
	cursor: pointer;
	display: inline-block;
	padding: 10px 20px;
	color: #03e9f4;
	font-size: 16px;
	text-decoration: none;
	text-transform: uppercase;
	overflow: hidden;
	transition: 0.5s;
	margin-top: 40px;
	letter-spacing: 4px;
	& > span {
		position: absolute;
		display: block;
	}
	& > span:nth-child(1) {
		top: 0;
		left: -100%;
		width: 100%;
		height: 2px;
		background: linear-gradient(90deg, transparent, #03e9f4);
		animation: ${BtnAnim1} 1s linear infinite;
	}
	& > span:nth-child(2) {
		top: -100%;
		right: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(180deg, transparent, #03e9f4);
		animation: ${BtnAnim2} 1s linear infinite;
		animation-delay: 0.25s;
	}
	& > span:nth-child(3) {
		bottom: 0;
		right: -100%;
		width: 100%;
		height: 2px;
		background: linear-gradient(270deg, transparent, #03e9f4);
		animation: ${BtnAnim3} 1s linear infinite;
		animation-delay: 0.5s;
	}
	& > span:nth-child(4) {
		bottom: -100%;
		left: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(360deg, transparent, #03e9f4);
		animation: ${BtnAnim4} 1s linear infinite;
		animation-delay: 0.75s;
	}
	&:hover {
		background: #03e9f4;
		color: #fff;
		border-radius: 5px;
		box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
	}
`;

const PaymentForm = () => {
	return (
		<FormWrapper>
			<h2>CreditCard</h2>
			<InputWrapper>
				<input type="text" />
				<label>Card Number</label>
			</InputWrapper>
			<InputWrapper>
				<input type="text" />
				<label>Card Holder</label>
			</InputWrapper>
			<SubmitButton>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				Submit
			</SubmitButton>
		</FormWrapper>
	);
};

export default PaymentForm;
