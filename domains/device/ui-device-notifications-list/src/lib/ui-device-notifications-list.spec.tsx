import { render } from '@testing-library/react';

import { FeatureDeviceNotificationList } from './ui-device-notifications-list';

describe('FeatureDeviceNotificationList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureDeviceNotificationList />);
    expect(baseElement).toBeTruthy();
  });
});
