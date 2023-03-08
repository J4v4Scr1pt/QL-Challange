import styled from 'styled-components';

const Wrapper = styled.div`
	width: 300px;
	min-height: 400px;
	border-radius: 8px;
	word-break: break-all;
	color: white;
	padding: 16px;
	border: 6px solid rgb(4, 217, 255);
	filter: drop-shadow(rgb(4, 217, 255) 0px 0px 15px) drop-shadow(rgb(4, 217, 255) 0px 0px 50px) contrast(2)
		brightness(2);
`;

type Props = {
	children: string | JSX.Element;
};

const OutputFrame = ({ children }: Props) => {
	return <Wrapper>{children}</Wrapper>;
};

export default OutputFrame;
