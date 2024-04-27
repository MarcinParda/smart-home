import { render } from '@testing-library/react';

import FeatureDeviceList from './feature-device-list';

describe('FeatureDeviceList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureDeviceList />);
    expect(baseElement).toBeTruthy();
  });
});
