import { render, screen } from '@testing-library/react';
import App from './App';
// import Car from './w3school/Car'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
