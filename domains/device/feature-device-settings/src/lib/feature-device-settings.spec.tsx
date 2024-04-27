import { render } from '@testing-library/react';

import FeatureDeviceSettings from './feature-device-settings';

describe('FeatureDeviceSettings', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureDeviceSettings />);
    expect(baseElement).toBeTruthy();
  });
});
