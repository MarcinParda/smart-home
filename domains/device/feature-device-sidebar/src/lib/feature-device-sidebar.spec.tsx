import { render } from '@testing-library/react';

import { FeatureDeviceSidebar } from './feature-device-sidebar';

describe('FeatureDeviceSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureDeviceSidebar />);
    expect(baseElement).toBeTruthy();
  });
});
