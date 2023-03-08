import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import DropDown from '../sharedComponents/DropDown';
import { Shake, ScaleIn, ScaleOut, BtnAnim1, BtnAnim2, BtnAnim3, BtnAnim4 } from './Animatons';
import ValidCard, {
	validCardHolder,
	validMonth,
	validYear,
	validCvc,
	validCardNumber,
} from './CreditCardValidation';

const FormWrapper = styled.div<{ invalidCard: boolean }>`
	display: flex;
	width: 600px;
	height: 350px;
	padding: 20px;
	position: relative;
	background: linear-gradient(158deg, red, purple);
	box-sizing: border-box;
	box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
	border-radius: 10px;
	flex-direction: column;
	align-items: flex-end;
	& > h2 {
		margin: 0 0 30px;
		padding: 0;
		color: #fff;
		text-align: center;
		width: 100%;
	}
	animation: ${({ invalidCard }) =>
		invalidCard
			? css`
					${Shake} 0.9s ease-in-out both;
			  `
			: css``};
`;

const InputWrapper = styled.div<{
	useSecurity: boolean;
	hasValue: boolean;
	width: string | null;
	mb: string | null;
}>`
	position: relative;
	width: ${({ width }) => width || '100%'};
	& > input {
		width: 100%;
		padding: 10px 0;
		font-size: 16px;
		color: #fff;
		margin-bottom: ${({ mb }) => mb || '30px'};
		border: none;
		border-bottom: 1px solid #fff;
		outline: none;
		background: transparent;
		::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
		::-webkit-outer-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
		${({ useSecurity }) =>
			useSecurity
				? `		text-security: disc;
		-webkit-text-security: disc;
		-moz-text-security: disc;`
				: ''};
	}
	& > label {
		position: absolute;
		top: 0;
		left: 0;
		padding: 10px 0;
		font-size: 25px;
		color: #fff;
		pointer-events: none;
		transition: 0.5s;
	}
	&:focus-within > label {
		top: -25px;
		left: 0;
		color: #1c1c1c;
		font-size: 20px;
	}
	${({ hasValue }) =>
		hasValue &&
		` & > label {
        top: -25px;
		left: 0;
		color: #1c1c1c;
		font-size: 20px;
    }
    `}
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

const DateCvcWrapper = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-around;
`;

const ValidationPopup = styled.div<{ showInvalidCardTip: boolean }>`
	position: absolute;
	display: flex;
	top: 100px;
	right: -400px;
	background: rgb(76, 76, 76);
	font-weight: 900;
	height: 140px;
	width: 320px;
	border-radius: 8px;
	filter: drop-shadow(rgb(255, 49, 49) 0px 0px 15px) drop-shadow(rgb(255, 49, 49) 0px 0px 50px) contrast(2)
		brightness(2);
	::before {
		content: '';
		left: -35px;
		display: inline-block;
		border-right: 6px solid rgb(255, 49, 49);
		border-bottom: 6px solid rgb(255, 49, 49);
		width: 20px;
		height: 20px;
		transform: rotate(-225deg);
		position: relative;
		top: 55px;
	}
	animation: ${({ showInvalidCardTip }) =>
		showInvalidCardTip
			? css`
					${ScaleIn} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
			  `
			: css`
					${ScaleOut} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
			  `};
`;

const CheckList = styled.ul<{
	validCardHolder: boolean;
	validMonth: boolean;
	validYear: boolean;
	validCvc: boolean;
	validCardNumber: boolean;
}>`
	& > li {
		color: rgba(4, 217, 255, 1);
	}
	li:nth-child(1)::marker {
		content: '${({ validCardNumber }) => (validCardNumber ? '✅  ' : '❌  ')}';
	}
	li:nth-child(2)::marker {
		content: '${({ validCardHolder }) => (validCardHolder ? '✅  ' : '❌  ')}';
	}
	li:nth-child(3)::marker {
		content: '${({ validMonth }) => (validMonth ? '✅  ' : '❌  ')}';
	}
	li:nth-child(4)::marker {
		content: '${({ validYear }) => (validYear ? '✅  ' : '❌  ')}';
	}
	li:nth-child(5)::marker {
		content: '${({ validCvc }) => (validCvc ? '✅  ' : '❌  ')}';
	}
`;

const PaymentForm = () => {
	const [cardBrand, setCardBrand] = useState<string>('CreditCard');
	const [cardNmb, setCardNmb] = useState<string>('');
	const [cardHld, setCardHld] = useState<string>('');
	const [cvc, setCvc] = useState<string>('');
	const [selectedMonth, setSelectedMonth] = useState<string>('');
	const [selectedYear, setSelectedYear] = useState<string>('');
	const [invalidCard, setInvalidCard] = useState<boolean>(false);
	const [showInvalidCardTip, setShowInvalidCardTip] = useState<boolean>(false);
	const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
	const years = ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033'];

	useEffect(() => {
		const IsVisa = /^4[0-9]{6,}$/.test(cardNmb);
		const IsMasterCard =
			/^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/.test(
				cardNmb
			);
		const IsAE = /^3[47][0-9]{5,}$/.test(cardNmb);
		if (IsVisa) setCardBrand('Visa');
		if (IsMasterCard) setCardBrand('Mastercard');
		if (IsAE) setCardBrand('American Express');
		if (!IsAE && !IsMasterCard && !IsVisa && cardNmb.length >= 9) setCardBrand('Unknown');
	}, [cardNmb]);

	const onChangeMonth = (e: ChangeEvent<HTMLSelectElement>) => {
		if (showInvalidCardTip) setShowInvalidCardTip(false);
		setSelectedMonth(e.target.value);
	};

	const onChangeYear = (e: ChangeEvent<HTMLSelectElement>) => {
		if (showInvalidCardTip) setShowInvalidCardTip(false);
		setSelectedYear(e.target.value);
	};

	const onChangeCardNmb = (e: ChangeEvent<HTMLInputElement>) => {
		if (showInvalidCardTip) setShowInvalidCardTip(false);
		setCardNmb(e.target.value.length > 0 ? e.target.value : 'CreditCard');
	};

	const onChangeCardHld = (e: ChangeEvent<HTMLInputElement>) => {
		if (showInvalidCardTip) setShowInvalidCardTip(false);
		setCardHld(e.target.value);
	};

	const onChangeCvc = (e: ChangeEvent<HTMLInputElement>) => {
		if (showInvalidCardTip) setShowInvalidCardTip(false);
		setCvc(e.target.value);
	};
	const onSubmit = () => {
		if (!ValidCard(cardNmb, selectedMonth, selectedYear, cvc, cardHld)) {
			if (!invalidCard) setInvalidCard(true);
			if (!showInvalidCardTip) setShowInvalidCardTip(true);
			setTimeout(() => {
				setInvalidCard(false);
			}, 1000);
			return;
		}
		// Reset form
		const audio = new Audio('https://www.myinstants.com/media/sounds/money_2.mp3');
		audio.play();
		setCardBrand('CreditCard');
		setCvc('');
		setCardHld('');
		setCardNmb('');
		setSelectedYear('');
		setSelectedMonth('');
	};
	const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (!/[0-9\n]/.test(e.key) && e.key !== 'Backspace') e.preventDefault();
	};

	return (
		<FormWrapper {...{ invalidCard }}>
			<h2>{cardBrand}</h2>
			<InputWrapper {...{ useSecurity: false, hasValue: cardNmb.length > 0, width: null, mb: null }}>
				<input type="number" value={cardNmb} onChange={onChangeCardNmb} />
				<label>Card Number</label>
			</InputWrapper>
			<InputWrapper {...{ useSecurity: false, hasValue: cardHld.length > 0, width: null, mb: null }}>
				<input type="text" value={cardHld} onChange={onChangeCardHld} />
				<label>Card Holder</label>
			</InputWrapper>
			<DateCvcWrapper>
				<DropDown
					{...{
						dataTestid: 'month-dropdown',
						onChange: onChangeMonth,
						options: months,
						selectLabel: 'Month',
						selected: selectedMonth,
					}}
				/>
				<DropDown
					{...{
						dataTestid: 'year-dropdown',
						onChange: onChangeYear,
						options: years,
						selectLabel: 'Year',
						selected: selectedYear,
					}}
				/>
				<InputWrapper {...{ useSecurity: true, hasValue: cvc.length > 0, width: '50px', mb: '0' }}>
					<input
						type="text"
						inputMode="numeric"
						maxLength={3}
						autoComplete="off"
						onKeyDown={onKeyDown}
						value={cvc}
						onChange={onChangeCvc}
					/>
					<label>CVC</label>
				</InputWrapper>
			</DateCvcWrapper>
			<SubmitButton {...{ onClick: onSubmit }}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				Submit
			</SubmitButton>
			<ValidationPopup data-testid="ValidationBox" {...{ showInvalidCardTip }}>
				<CheckList {...{ validCardHolder, validMonth, validYear, validCvc, validCardNumber }}>
					<li>Valid Creditcard number</li>
					<li>Valid holder name</li>
					<li> Valid month</li>
					<li>Valid year</li>
					<li>Valid CVC</li>
				</CheckList>
			</ValidationPopup>
		</FormWrapper>
	);
};

export default PaymentForm;
