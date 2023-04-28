import { render } from '@testing-library/react';

import CustomButton from './custom-button';

describe('CustomeButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomButton label={''} />);
    expect(baseElement).toBeTruthy();
  });
});
