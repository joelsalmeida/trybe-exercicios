import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se existe o campo Email', () => {
  render(<App />);

  const inputEmail = screen.getByLabelText('Email');

  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('Verifica se existe dois botões', () => {
  render(<App />);
  
  const button = screen.getAllByRole('button');

  expect(button).toHaveLength(2);
})
