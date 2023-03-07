import styled, { keyframes } from "styled-components";
import GlobalStyle from "./GlobalStyles";
import ArrayChallenge from "./Algorithms/Arraychallenge";
import TextChallenge from "./Algorithms/TextChallenge";

const Header = styled.h1`
	background-image: url("https://assets.codepen.io/308367/mountain-with-stars.jpg");
	background-position: bottom;
	background-size: cover;
	padding: 5rem;
	min-height: 70vh;
	position: relative;
`;

const HeaderInnerWrapper = styled.div`
	position: absolute;
	inset: 0;
	background: rgb(0 0 0 / 0.5);
	mask: url("https://assets.codepen.io/308367/mountain-mask.svg");
	mask-position: bottom;
	mask-size: cover;
`;

const HeaderText = styled.h1`
	text-align: center;
	font-size: clamp(4rem, 10vw + 0.5rem, 9rem);
	font-weight: 900;
	line-height: 1;
	margin-top: 45px;
	text-transform: uppercase;
	position: fixed;
	width: 100%;
	color: #eeeeee;
	text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa,
		0 0 102px #0fa, 0 0 151px #0fa;
`;

const Pulsate = keyframes`
100% {
  text-shadow:
    0 0 4px #fff,
    0 0 11px #fff,
    0 0 19px #fff,
    0 0 40px #f09,
    0 0 80px #f09,
    0 0 90px #f09,
    0 0 100px #f09,
    0 0 150px #f09;
}
0% {
  text-shadow:
    0 0 4px #fff,
    0 0 10px #fff,
    0 0 18px #fff,
    0 0 38px #f09,
    0 0 73px #f09,
    0 0 80px #f09,
    0 0 94px #f09,
    0 0 140px #f09;
}
`;

const HeaderSubText = styled.h2`
	text-align: center;
	font-size: clamp(4rem, 10vw + 0.5rem, 9rem);
	font-weight: 900;
	line-height: 1;
	top: 150;
	text-transform: uppercase;
	position: fixed;
	width: 100%;
	color: #eeeeee;
	animation: ${Pulsate} 0.11s ease-in-out infinite alternate;
`;

const MainContainer = styled.div`
	display: flex;
	gap: 20px;
	flex-direction: column;
	align-items: center;
`;

const WrapperAlgorithms = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	& > p {
		margin-bottom: 50px;
	}
`;

const Seperator = styled.div`
	width: 100%;
	margin: 50px 0;
	border-radius: 8px;
	border-top: 6px solid rgb(255, 95, 31);
	filter: drop-shadow(rgb(255, 95, 31) 0px 0px 4px) drop-shadow(rgb(255, 95, 31) 0px 0px 15px) contrast(2)
		brightness(2);
`;

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Header>
				<HeaderInnerWrapper>
					<HeaderText>QueensLab</HeaderText>
					<HeaderSubText>The Challenge</HeaderSubText>
				</HeaderInnerWrapper>
			</Header>
			<main>
				<MainContainer>
					<WrapperAlgorithms>
						<h3>Algorithms</h3>
						<p>
							A function that finds and removes instances of four identical consecutive
							lowercase letters. Write a text and click analyze to view the output.{" "}
						</p>
						<TextChallenge />
						<Seperator />
						<p>
							A function that takes an array of numbers and returns the maximum sum of two
							numbers whose digits have an odd sum. Write a comma separated list of numbers.
						</p>
						<ArrayChallenge />
					</WrapperAlgorithms>
					<h3>Payment</h3>
				</MainContainer>
			</main>
		</>
	);
};

export default App;
