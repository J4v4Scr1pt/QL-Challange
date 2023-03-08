import { ChangeEventHandler } from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
	border-radius: 4px;
	height: 30px;
	width: 130px;
	text-align: center;

	appearance: none;
	border: 0;
	outline: 0;
	font: inherit;
	background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)
			no-repeat right 0.1em center / 0.9em,
		linear-gradient(to left, rgba(255, 255, 255, 0.3) 1em, rgba(255, 255, 255, 0.2) 1em);
	color: white;
	box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
	cursor: pointer;
`;
const StyledOption = styled.option`
	color: inherit;
	background-color: #320a28;
`;

type Props = {
	onChange: ChangeEventHandler<HTMLSelectElement>;
	options: Array<string>;
	selected: string;
	selectLabel: string;
};

const DropDown = ({ onChange, options, selectLabel, selected }: Props) => {
	return (
		<StyledSelect {...{ onChange, value: selected }}>
			<StyledOption value="">{selectLabel}</StyledOption>
			{options.map((item, index) => (
				<StyledOption key={index + item}>{item}</StyledOption>
			))}
		</StyledSelect>
	);
};

export default DropDown;
