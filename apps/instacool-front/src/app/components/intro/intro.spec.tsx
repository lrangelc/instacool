import React from 'react';
import { render } from '@testing-library/react';

import Intro from './intro';

describe('Intro', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Intro text='' />);
    expect(baseElement).toBeTruthy();
  });
});
