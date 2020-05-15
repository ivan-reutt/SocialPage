import styled from 'styled-components';

import { Row, Spin, Badge, Col } from 'antd';

export const StyledRow = styled(Row)`
  margin: 20px;
`;

export const StyledSpin = styled(Spin)`
  margin: 50px 0 50px;
`;

export const StyledCol = styled(Col)`
  display: flex;
`;

export const StyledBadge = styled(Badge)`
  .ant-badge-status-dot {
    background-color: ${(props) =>
      props.status === 'processing' ? '#00ff00' : '#ff0000'};
  }
  .ant-badge-status-dot:after {
    border-color: ${(props) =>
      props.status === 'processing' ? '#00ff00' : 'transparent'};
  }
`;
