import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the heading "React Catalog Demo"', () => {
    render(<App />);
    expect(screen.getByText('React Catalog Demo')).toBeInTheDocument();
  });
});
