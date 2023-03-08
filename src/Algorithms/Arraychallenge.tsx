import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Button from '../sharedComponents/Button';
import Input from '../sharedComponents/Input';
import OutputFrame from '../sharedComponents/OutputFrame';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
`;

const InputButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const OutputWrapper = styled.div`
	display: flex;
	color: white;
	flex-direction: column;
	align-items: center;
	& > h2 {
		margin: 0;
		color: white;
	}
	& > p {
		color: white;
		font-size: 24px;
	}
`;

const getLargestOddNumbers = (
	numbersArray: Array<number>,
	skipIndex: number,
	accumulatorArray: Array<number>
): Array<number> => {
	if (skipIndex > numbersArray.length) return numbersArray;

	for (let i = 0; i < numbersArray.length; i++) {
		if (i === skipIndex) continue;

		const checkSum = numbersArray[i] + numbersArray[skipIndex];
		if (checkSum % 2 === 1 && !accumulatorArray.includes(checkSum)) accumulatorArray.push(checkSum);
	}

	if (skipIndex <= numbersArray.length) getLargestOddNumbers(numbersArray, skipIndex + 1, accumulatorArray);

	return accumulatorArray;
};

const ArrayChallenge = () => {
	const [numbers, setNumbers] = useState(new Array<number>());
	const [oddNumbers, setOddNumbers] = useState(new Array<number>());
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNumbers(e.currentTarget.value.split(',').map(Number));
	};

	const onClick = () => {
		setOddNumbers(getLargestOddNumbers(numbers, 0, new Array<number>()));
	};
	return (
		<Wrapper>
			<InputButtonWrapper>
				<Input {...{ onChange, dataTestid: 'array-challange-input' }} />
				<Button {...{ onClick }}>Analyze Array</Button>
			</InputButtonWrapper>
			<OutputFrame>
				<OutputWrapper>
					<h2>Odd numbers</h2>
					<p>{oddNumbers.length > 0 && oddNumbers.join(', ')}</p>
					<h2>Largest odd number</h2>
					<p>{oddNumbers.length > 0 && Math.max(...oddNumbers).toString()}</p>
				</OutputWrapper>
			</OutputFrame>
		</Wrapper>
	);
};

export default ArrayChallenge;
