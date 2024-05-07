import { render } from '@testing-library/react';

import { FeatureDeviceSidebar } from './ui-device-sidebar';

describe('FeatureDeviceSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureDeviceSidebar />);
    expect(baseElement).toBeTruthy();
  });
});
