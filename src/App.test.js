import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tableau de bord', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tableau de bord/i);
  expect(linkElement).toBeInTheDocument();
});
