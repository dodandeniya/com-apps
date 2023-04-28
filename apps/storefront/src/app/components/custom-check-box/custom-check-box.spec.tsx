import { render } from '@testing-library/react';

import CustomCheckBox from './custom-check-box';

describe('CustomCheckBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomCheckBox />);
    expect(baseElement).toBeTruthy();
  });
});
