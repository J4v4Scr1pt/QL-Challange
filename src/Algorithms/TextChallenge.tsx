import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Input from "../sharedComponents/Input";
import Button from "../sharedComponents/Button";
import OutputFrame from "../sharedComponents/OutputFrame";

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
	& > h4:not(:nth-child(3)) {
		margin: 0;
		color: white;
	}
	& > h4:nth-child(3) {
		margin: 0;
		margin-top: 50px;
		color: white;
	}
	& > p {
		color: white;
	}
`;

const checkForRepeatedCharsRecursive = (
	text: string,
	mainIndex: number,
	innerIndex: number,
	trimStart: number,
	counter: number
): string => {
	if (mainIndex >= text.length || innerIndex > text.length) return text;

	if (text[mainIndex] !== text[innerIndex]) {
		if (counter >= 3) {
			return checkForRepeatedCharsRecursive(
				trimStart > 0
					? text.substring(0, trimStart) +
							text.substring(trimStart, mainIndex) +
							text.substring(mainIndex + 1, text.length)
					: text.substring(0, mainIndex) + text.substring(mainIndex + 1, text.length),
				mainIndex + counter, // should reprecent Iterative top for-loop index
				mainIndex + counter + 1, // should reprecent Iterative inner for-loop index
				mainIndex + counter, // should reprecent Iterative trimStart
				0
			);
		}
		return checkForRepeatedCharsRecursive(text, mainIndex + 1, mainIndex + 1, trimStart, 0);
	}
	return checkForRepeatedCharsRecursive(text, mainIndex, innerIndex + 1, trimStart, counter + 1);
};

const checkForRepeatedCharsIterative = (text: string): string => {
	let trimStart = 0;
	for (let i = 0; i < text.length; i++) {
		let counter = 0;
		for (let index = i + 1; index < text.length; index++) {
			if (text[i] !== text[index]) break;
			if (text[i] === text[index]) counter++;
		}
		if (counter >= 3) {
			if (trimStart > 0) {
				text =
					text.substring(0, trimStart) +
					text.substring(trimStart, i) +
					text.substring(i + 1, text.length);
			} else {
				text = text.substring(0, i) + text.substring(i + 1, text.length);
			}
			i += counter;
			trimStart = i;
		}
	}
	return text;
};

const TextChallenge = () => {
	const [text, setText] = useState("");
	const [trimedText, setTrimedText] = useState("");
	const [timerValues, setTimerValues] = useState({
		timerOne: "",
		timerTwo: "",
	});

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTrimedText("");
		setTimerValues({ timerOne: "", timerTwo: "" });
		setText(e.currentTarget.value);
	};

	const onClick = () => {
		if (!text?.trim()?.length) return;

		const t0 = performance.now();
		try {
			const recursiveText = checkForRepeatedCharsRecursive(text, 0, 0, 0, 0);
			console.log("🚀 ~ recursive method ~ recursiveText:", recursiveText);
			console.log("🚀 ~ recursive method ~ charsRemoved:", text.length - recursiveText.length);
		} catch (err) {
			console.log("🚀 ~  recursive methodFailed:", err);
		}
		const t1 = performance.now();

		const t2 = performance.now();
		const tmpText = checkForRepeatedCharsIterative(text);
		const t3 = performance.now();
		setTimerValues({ timerOne: (t1 - t0).toFixed(8), timerTwo: (t3 - t2).toFixed(8) });
		setTrimedText(tmpText);
	};

	return (
		<Wrapper>
			<InputButtonWrapper>
				<Input {...{ onChange }} />
				<Button {...{ onClick }}>Analyze Text</Button>
			</InputButtonWrapper>
			<OutputFrame>
				<OutputWrapper>
					<h4>Recursive method</h4>
					{timerValues.timerOne} ms
					<h4>Iterative method</h4>
					{timerValues.timerTwo} ms
					<h4>Inputed text</h4>
					{text}
					<p>Length:{text.length} </p>
					<h4>Trimed text</h4>
					{trimedText}
					<p>Length:{trimedText.length} </p>
					{trimedText.length > 0 && <p>Chars removed:{text.length - trimedText.length} </p>}
				</OutputWrapper>
			</OutputFrame>
		</Wrapper>
	);
};

export default TextChallenge;
