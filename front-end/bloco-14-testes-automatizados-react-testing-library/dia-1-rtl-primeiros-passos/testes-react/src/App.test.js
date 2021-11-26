import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testa inserção de E-mail', () => {
  it('Verifica se existe o campo Email', () => {
    render(<App />);

    const inputEmail = screen.getByLabelText('Email');

    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });

  it('Verifica se existe dois botões', () => {
    render(<App />);

    const button = screen.getAllByRole('button');

    expect(button).toHaveLength(2);
  });

  it('Verifica se existe um botão Enviar', () => {
    render(<App />);

    const buttonSend = screen.getByTestId('id-send');

    expect(buttonSend).toBeInTheDocument();
    expect(buttonSend).toHaveProperty('type', 'button');
    expect(buttonSend).toHaveValue('Enviar');
  });

  it('Verifica funcionamento do campo de "e-mail" e botão "enviar"', () => {
    render(<App />);

    const emailUser = 'email@email.com';
    const textEmail = screen.getByTestId('id-email-user');

    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');

    const buttonSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');

    userEvent.type(inputEmail, emailUser);
    userEvent.click(buttonSend);

    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${emailUser}`);
  });
});
