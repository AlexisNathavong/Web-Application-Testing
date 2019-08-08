import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import DashBoard from './Dashboard';

describe('<Dashboard />', () => {
    it('should render Ball', () => {
        const dash = render(<DashBoard /> )

        //Click buttons
        const container = document.body
        dash.getByText(/Ball/);
    });

    it('should render Strike', () => {
        const dash = render(<DashBoard />)

        dash.getByText(/Strike/);
    });

    it('should render Foul', () => {
        const dash = render(<DashBoard />)

        dash.getByText(/Foul/);
    });

    it('should render Hit', () => {
        const dash = render(<DashBoard />)

        dash.getByText(/Hit/);
    });
})