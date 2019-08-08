import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Display from './Display';

describe('<Display />', () => {
    it('should render Display', () => {
        const display = render(<Display />)

        display.getAllByTestId('display');
    });
})