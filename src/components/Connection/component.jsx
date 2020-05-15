import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Result } from 'antd';

const { Content } = Layout;

const Connection = ({ token }) => {
  return (
    <Content>
      {token ? (
        <Result
          status="success"
          title="Successfully Connect with API VK!"
          subTitle="Success!"
        />
      ) : (
        <Result
          status="error"
          title="No connection with VK."
          subTitle="Please click on the button 'Connect to VK' and pass authorization."
        />
      )}
    </Content>
  );
};

Connection.propTypes = {
  token: PropTypes.string,
};

export default Connection;
