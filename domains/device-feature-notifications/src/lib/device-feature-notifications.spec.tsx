import { render } from '@testing-library/react';

import DeviceFeatureNotifications from './device-feature-notifications';

describe('DeviceFeatureNotifications', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeviceFeatureNotifications />);
    expect(baseElement).toBeTruthy();
  });
});
