import styled from 'tailwind';

/* eslint-disable-next-line */
export interface FeatureDeviceListProps {}

const StyledFeatureDeviceList = styled.div`
  color: pink;
`;

export function FeatureDeviceList(props: FeatureDeviceListProps) {
  return (
    <StyledFeatureDeviceList>
      <h1>Welcome to FeatureDeviceList!</h1>
    </StyledFeatureDeviceList>
  );
}

export default FeatureDeviceList;
