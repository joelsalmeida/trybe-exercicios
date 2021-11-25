import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

describe('Testa componente ValidEmail', () => {
  it('Verifica se mensagem "Email Válido" é mostrada caso o e-mail seja válido', () => {
    const validEmail = 'email@email.com';

    render(<ValidEmail email={validEmail} />);
    const isValid = screen.getByText('Email Válido');

    expect(isValid).toBeInTheDocument();
  });

  it('Verifica se mensagem "Email Inválido" é mostrada caso o e-mail seja inválido', () => {
    const invalidEmail = 'email.invalido';
    
    render(<ValidEmail email={invalidEmail} />);
    const isValid = screen.getByText('Email Inválido');

    expect(isValid).toBeInTheDocument();
  });
});
