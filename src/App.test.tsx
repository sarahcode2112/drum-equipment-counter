import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders crash cymbal count label', () => {
  render(<App />);
  const crashCountElement = screen.getByText(/Crash Cymbals:/i);
  expect(crashCountElement).toBeInTheDocument();
});

test('crash cymbal count increases by 1 after crash up button clicked once', () => {
  render(<App />);
  const crashUpButton = screen.getByText(`⬆️ Crash Cymbals`)
  fireEvent.click(crashUpButton)
  const crashCountOneElement = screen.getByText(/Crash Cymbals: 1/i);
  expect(crashCountOneElement).toBeInTheDocument()
})

test('splash cymbal count increases by 3 after splash up button clicked thrice', () => {
  render(<App />);
  const splashUpButton = screen.getByText(`⬆️ Splash Cymbals`)
  for (let i = 0; i<3; i++) {
    fireEvent.click(splashUpButton)
  }
  const splashCountThreeElement = screen.getByText(/Splash Cymbals: 3/i);
  expect(splashCountThreeElement).toBeInTheDocument()
})

test('ride cymbal count stays at zero, after ride down button clicked, when ride count was already zero', () => {
  render(<App />);
  const rideDownButton = screen.getByText(`Ride Cymbals ⬇️`)
  fireEvent.click(rideDownButton)
  const rideCountZeroElement = screen.getByText(/Ride Cymbals: 0/i);
  expect(rideCountZeroElement).toBeInTheDocument()
})