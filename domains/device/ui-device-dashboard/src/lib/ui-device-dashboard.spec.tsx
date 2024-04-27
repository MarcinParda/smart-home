import { render } from '@testing-library/react';

import UiDeviceDashboard from './ui-device-dashboard';

describe('UiDeviceDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiDeviceDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
