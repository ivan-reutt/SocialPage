import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsonp from 'axios-jsonp';

// import { default as vkApi } from 'utils/vk';

import { Layout, Descriptions, Avatar, Col } from 'antd';
import PropTypes from 'prop-types';
import { StyledBadge, StyledCol, StyledRow, StyledSpin } from './styles';

const { Content } = Layout;

const UserInfo = ({ token }) => {
  const url = `https://api.vk.com/method/users.get?&fields=photo_200,bdate,city,country,online&access_token=${token}&v=5.52`;

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [bdate, setBdate] = useState(null);
  const [online, setOnline] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url,
      adapter: jsonp,
    })
      // vkApi
      //   .getUserInfo(url)
      .then((res) => {
        const userInfo = res.data.response[0];
        setFirstName(userInfo.first_name);
        setLastName(userInfo.last_name);
        setAvatar(userInfo.photo_200);
        setCity(userInfo.city.title);
        setCountry(userInfo.country.title);
        setBdate(userInfo.bdate);
        setOnline(userInfo.online);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <Content>
      {firstName ? (
        <StyledRow justify="space-between">
          <StyledCol span={16}>
            <StyledBadge status={online ? 'processing' : 'error'} />
            <Descriptions title={`${lastName} ${firstName}`} column={1}>
              <Descriptions.Item label="Country">{country}</Descriptions.Item>
              <Descriptions.Item label="City">{city}</Descriptions.Item>
              <Descriptions.Item label="Birthday">{bdate}</Descriptions.Item>
            </Descriptions>
          </StyledCol>
          <Col flex="200px">
            <Avatar src={avatar} shape="square" size={200} />
          </Col>
        </StyledRow>
      ) : (
        <StyledRow justify="center">
          <StyledSpin />
        </StyledRow>
      )}
    </Content>
  );
};

UserInfo.propTypes = {
  token: PropTypes.string,
};

export default UserInfo;
