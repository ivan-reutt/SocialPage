import styled from 'styled-components';

import { Menu, Layout, Button } from 'antd';

const { Header } = Layout;

export const StyledMenu = styled(Menu)`
  background-color: transparent;
  .ant-menu-item.ant-menu-item-only-child.ant-menu-item-active a {
    color: #1890ff;
  }
  .ant-menu-item.ant-menu-item-only-child > a {
    color: #fff;
  }
  .ant-menu-item.ant-menu-item-only-child.ant-menu-item-selected a {
    color: #1890ff;
  }
`;

export const StyledHeader = styled(Header)`
  background-color: #20405f;
`;

export const StyledButton = styled(Button)`
  background-color: #0089c4;
  border-color: #40a9ff;
`;

export const StyledMenuItem = styled(Menu.Item)``;
