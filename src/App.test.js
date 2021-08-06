import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders App', () => {
  render(<App />);
  const bedDropdown = screen.getByText(/Duration in bed/i);
  expect(bedDropdown).toBeInTheDocument();

  const sleepDropdown = screen.getByText(/Duration asleep/i);
  expect(sleepDropdown).toBeInTheDocument();

  const scoreText = screen.queryByText(/Score/i);
  expect(scoreText).not.toBeInTheDocument();
});

test('calculate button is disabled', () => {
  const { getByLabelText, getByRole } = render(<App />);
  const button = getByRole('button');
  expect(button).toBeDisabled();

  userEvent.selectOptions(getByLabelText('Duration in bed'), '30');
  expect(button).toBeDisabled();
});

test('calculate button is enabled when user selects options', () => {
  const { getByLabelText, getByRole } = render(<App />);
  const button = getByRole('button');

  userEvent.selectOptions(getByLabelText('Duration in bed'), '30');
  userEvent.selectOptions(getByLabelText('Duration asleep'), '60');
  expect(button).not.toBeDisabled();
});
