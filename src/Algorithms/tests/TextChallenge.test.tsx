import { describe, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '@testing-library/react';
import TextChallenge from '../TextChallenge';

describe('TextChallenge', () => {
	afterAll(cleanup);

	render(<TextChallenge />);

	test('Analyze button should be rendered', () => {
		expect(screen.getByText('Analyze Text')).toBeInTheDocument();
	});

	test('Write a text in input', async () => {
		const user = userEvent.setup();
		const input = screen.getByTestId('text-challange-input') as HTMLInputElement;
		await user.type(input, 'yyyödåååå');
		expect(input.value).toBe('yyyödåååå');

		await user.click(screen.getByRole('button', { name: /Analyze Text/i }));

		expect(screen.getByText(/yyyödååå/i)).toBeTruthy();
	});
});
