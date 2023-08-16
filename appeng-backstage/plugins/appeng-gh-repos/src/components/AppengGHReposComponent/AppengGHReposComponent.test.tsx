import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppengGHReposComponent } from './AppengGHReposComponent';

describe('ExampleFetchComponent', () => {
  it('renders the user table', async () => {
    render(<AppengGHReposComponent />);

    // Wait for the table to render
    const table = await screen.findByRole('table');
    const nationality = screen.getAllByText("GB")
    // Assert that the table contains the expected user data
    expect(table).toBeInTheDocument();
    expect(screen.getByAltText('Carolyn')).toBeInTheDocument();
    expect(screen.getByText('Carolyn Moore')).toBeInTheDocument();
    expect(screen.getByText('carolyn.moore@example.com')).toBeInTheDocument();
    expect(nationality[0]).toBeInTheDocument();
  });
});