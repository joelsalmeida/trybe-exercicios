import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';

describe('Testa aplicação React Router Test', () => {
  it('Deve renderizar o componente App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it('Deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading', { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Testa um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/');

    const notFoundTitle = screen.getByRole('heading', { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  });

  it('Deve renderizar apenas o componente About', () => {
    renderWithRouter(<About />);

    const aboutTitle = screen.getByRole('heading', { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Verifica se ao clicar no link "sobre" é direcionado a página correta', () => {
    const { history } = renderWithRouter(<App />);

    const linkToAbout = screen.getByRole('link', { name: /sobre/i });
    expect(linkToAbout).toBeInTheDocument();

    userEvent.click(linkToAbout);
    const {location: { pathname }} = history;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading', {
      name: /você está na página sobre/i,
      level: 1,
    });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Verifica se ao acessar um link inexistente página "não encontrada" é renderizada', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/naoexiste');

    const notFoundTitle = screen.getByRole('heading', { name: /página não encontrada/i });
    expect(notFoundTitle).toBeInTheDocument();
  });
});
