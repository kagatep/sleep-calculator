import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const bedDropdown = screen.getByText(/Duration in bed/i);
  expect(bedDropdown).toBeInTheDocument();

  const sleepDropdown = screen.getByText(/Duration asleep/i);
  expect(sleepDropdown).toBeInTheDocument();
});
