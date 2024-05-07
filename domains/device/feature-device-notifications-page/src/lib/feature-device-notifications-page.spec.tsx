import { render } from '@testing-library/react';

import { UIDeviceNotificationsPage } from './feature-device-notifications-page';

describe('DeviceFeatureNotifications', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UIDeviceNotificationsPage />);
    expect(baseElement).toBeTruthy();
  });
});
