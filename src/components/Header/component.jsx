import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'antd';

import 'antd/dist/antd.css';

import PropTypes from 'prop-types';
import {
  StyledMenu,
  StyledMenuItem,
  StyledHeader,
  StyledButton,
} from './styles';

const Header = ({ token, getToken }) => {
  const hostname = window.location.href;
  const searchParams = 'access_token=';
  const startIndex =
    window.location.href.lastIndexOf(searchParams) + searchParams.length;

  const endIndex = window.location.href.indexOf('&', startIndex);
  if (endIndex > 1 && startIndex > 1) {
    getToken(window.location.href.substring(startIndex, endIndex));
  }
  const [current, setCurrent] = useState('home');
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  const onClick = () => {
    getToken(null);
  };
  return (
    <StyledHeader>
      <Row justify="space-between">
        <Col>
          <StyledButton
            type="primary"
            href={`https://oauth.vk.com/authorize?client_id=7427126&display=popup&redirect_uri=${hostname}&scope=friends,photos,status&response_type=token&revoke=1&v=5.103`}
          >
            Connect to VK
          </StyledButton>
        </Col>
        <Col>
          <StyledMenu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <StyledMenuItem key="home">
              <NavLink exact to="/" rel="noopener noreferrer">
                Connection
              </NavLink>
            </StyledMenuItem>
            <StyledMenuItem key="userInfo" disabled={!token}>
              <NavLink exact to="/user" rel="noopener noreferrer">
                User Info
              </NavLink>
            </StyledMenuItem>
            <StyledMenuItem key="friends" disabled={!token}>
              <NavLink exact to="/friends" rel="noopener noreferrer">
                Friends
              </NavLink>
            </StyledMenuItem>
          </StyledMenu>
        </Col>
        <Col>
          <StyledButton type="primary" onClick={onClick}>
            Log out
          </StyledButton>
        </Col>
      </Row>
    </StyledHeader>
  );
};

Header.propTypes = {
  token: PropTypes.string,
  getToken: PropTypes.func.isRequired,
};

export default Header;
