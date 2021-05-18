import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SimpsonsQuotes from './SimpsonsQuotes';

describe('Simpsons Quote Generator tests', () => {
  it('should render a "DON\'T PUSH" button and a quote display', async () => {
    render(<SimpsonsQuotes />);

    const button = screen.getByRole('button');
  });
});
