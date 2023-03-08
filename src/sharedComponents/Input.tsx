import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
	border-radius: 8px;
	font-size: large;
	padding: 8px;
	border: 1px solid white;

	&:focus {
		outline: none;
		border: 1px solid green;
		box-shadow: 0 0 3px #fff, 0 0 5px #fff, 0 0 10px #fff, 0 0 21px #0fa, 0 0 31px #0fa, 0 0 35px #0fa,
			0 0 30px #0fa, 0 0 55px #0fa;
	}
`;
type Props = {
	onChange: ChangeEventHandler<HTMLInputElement>;
	dataTestid: string;
};

const Input = ({ onChange, dataTestid }: Props) => <StyledInput data-testid={dataTestid} {...{ onChange }} />;

export default Input;
