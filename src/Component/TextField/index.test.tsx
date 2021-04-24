import { render, screen } from '@testing-library/react';

import TextField from './index';

describe('Component <Demo />', () => {
    it('should render', () => {
        const props = {
            onChange: jest.fn(),
            label: 'Test'
        };

        render(<TextField {...props} />);
        const component = screen.getByRole('textbox');

        expect(component).toBeTruthy();
    });
});
