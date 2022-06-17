import { describe, expect, it } from 'vitest';
import { render, screen } from '../test/utils';
import Hero from './Hero';

import profilePic from '../assets/images/profile.jpg';

describe('Componente Hero', () => {
  it('Tem a foto do perfil de Jonathan', () => {
    render(<Hero />);

    const image: HTMLImageElement = screen.getByRole('img',
      { name: /foto do perfil de jonathan sorrindo/i });
    expect(image).toHaveAttribute('src', profilePic);
  });

  it('Tem os textos dizendo olá e muito prazer', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { name: /olá, sou o jonathan/i }));
    expect(screen.getByText(/muito prazer!/i));
  });

  it('Tem os botões para Projetos e Contato', () => {
    render(<Hero />);

    expect(screen.getByRole('button', { name: /projetos/i }));
    expect(screen.getByRole('button', { name: /contato/i }));
  });
});
