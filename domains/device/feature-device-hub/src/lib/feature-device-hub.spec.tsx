import { render } from '@testing-library/react';

import FeatureDeviceHub from './feature-device-hub';

describe('FeatureDeviceHub', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureDeviceHub />);
    expect(baseElement).toBeTruthy();
  });
});
