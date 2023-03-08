import { describe, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '@testing-library/react';
import Arraychallenge from '../Arraychallenge';

describe('TextChallenge', () => {
	afterAll(cleanup);

	render(<Arraychallenge />);

	test('Analyze button should be rendered', () => {
		expect(screen.getByText('Analyze Array')).toBeInTheDocument();
	});

	test('Write a text in input', async () => {
		const user = userEvent.setup();
		const input = screen.getByTestId('array-challange-input') as HTMLInputElement;
		await user.type(input, '23,56,78,43');
		expect(input.value).toBe('23,56,78,43');

		await user.click(screen.getByRole('button', { name: /Analyze Array/i }));

		expect(screen.getAllByText(/121/i)).toBeTruthy();
	});
});
