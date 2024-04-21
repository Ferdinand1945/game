import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
import Game from './pages/Game';
import Description from './pages/Description';

test('renders basic test for SBAB!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Projekt Beskrivning/i);
  const linkElement2 = screen.getByText(/Börja Spela/i);
  const text = screen.getByText(/Välkommen till kodtest spel Monty Hall - för SBAB!/i);

  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(text).toBeInTheDocument();
});

test('renders Game when navigated to /game', () => {
  render(
    <MemoryRouter initialEntries={['/game']}>
      <Routes>
        <Route path="/game" element={<Game />} />
      </Routes>
    </MemoryRouter>
  );

  const uniqueElement = screen.getByText(/SBAB! - Monty Hall Spel/i);
  expect(uniqueElement).toBeInTheDocument();
});

test('renders Description when navigated to /description', () => {
  render(
    <MemoryRouter initialEntries={['/description']}>
      <Routes>
        <Route path="/description" element={<Description />} />
      </Routes>
    </MemoryRouter>
  );

  const uniqueElement = screen.getByText(/Beskrivning/i);
  expect(uniqueElement).toBeInTheDocument();
});