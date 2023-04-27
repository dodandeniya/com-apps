import { render } from '@testing-library/react';

import CustomeButton from './custome-button';

describe('CustomeButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomeButton />);
    expect(baseElement).toBeTruthy();
  });
});
