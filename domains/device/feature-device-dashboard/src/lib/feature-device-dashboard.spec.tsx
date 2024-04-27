import { render } from '@testing-library/react';

import FeatureDeviceDashboard from './feature-device-dashboard';

describe('UiDeviceDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureDeviceDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
