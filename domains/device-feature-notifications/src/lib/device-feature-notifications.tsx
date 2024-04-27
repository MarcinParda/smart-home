import styled from 'tailwind';

/* eslint-disable-next-line */
export interface DeviceFeatureNotificationsProps {}

const StyledDeviceFeatureNotifications = styled.div`
  color: pink;
`;

export function DeviceFeatureNotifications(
  props: DeviceFeatureNotificationsProps
) {
  return (
    <StyledDeviceFeatureNotifications>
      <h1>Welcome to DeviceFeatureNotifications!</h1>
    </StyledDeviceFeatureNotifications>
  );
}

export default DeviceFeatureNotifications;
