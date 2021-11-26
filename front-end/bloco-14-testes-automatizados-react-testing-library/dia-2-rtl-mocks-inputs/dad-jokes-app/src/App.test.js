import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se uma piada é renderizada quando a aplicação inicia', async () => {
  global.fetch = (url) => {
    return Promise.resolve({
      json: () =>
        Promise.resolve({
          id: 'R7UfaahVfFd',
          joke: 'My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.',
          status: 200,
        }),
    });
  };

  render(<App />);
  const joke = await screen.findByText(
    'My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.'
  );
  expect(joke).toBeInTheDocument();
});
