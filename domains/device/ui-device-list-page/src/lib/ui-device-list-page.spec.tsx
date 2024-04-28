import { render } from '@testing-library/react';

import { UiDeviceListPage } from './ui-device-list-page';

describe('UiDeviceListPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiDeviceListPage />);
    expect(baseElement).toBeTruthy();
  });
});
