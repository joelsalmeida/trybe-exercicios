import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

test('Verifica se uma piada é renderizada quando a aplicação inicia', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      id: 'R7UfaahVfFd',
      joke: 'My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.',
      status: 200,
    }),
  });

  render(<App />);
  const joke = await screen.findByText(
    'My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.'
  );

  expect(joke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
});
