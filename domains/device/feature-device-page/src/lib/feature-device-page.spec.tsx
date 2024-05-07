import { render } from '@testing-library/react';

import { UiDeviceListPage } from './feature-device-page';

describe('UiDeviceListPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiDeviceListPage />);
    expect(baseElement).toBeTruthy();
  });
});
