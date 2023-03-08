import { describe, expect } from 'vitest';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import PaymentForm from '../PaymentForm';

describe('PaymentForm', () => {
	afterAll(cleanup);

	render(<PaymentForm />);

	test('Should render card', () => {
		expect(screen.getByText('Card Holder')).toBeInTheDocument();
	});

	test('Submit button should be rendered', () => {
		expect(screen.getByText('Submit')).toBeInTheDocument();
	});

	test('Select first month', async () => {
		const dropdown = screen.getByTestId('month-dropdown') as HTMLSelectElement;
		expect(dropdown.value).equal('');
		fireEvent.change(dropdown, { target: { value: '1' } });
		expect(dropdown.value).equal('1');
	});

	test('Select a year', async () => {
		const dropdown = screen.getByTestId('year-dropdown') as HTMLSelectElement;
		expect(dropdown.value).equal('');
		fireEvent.change(dropdown, { target: { value: '2024' } });
		expect(dropdown.value).equal('2024');
	});
});
