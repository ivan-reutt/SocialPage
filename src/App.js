import React from 'react';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeaderContainer from 'components/Header/container';
import store from 'redux/store';
import FriendsContainer from 'components/FriendsList/container';
import UserInfoContainer from 'components/UserInfo/container';
import ConnectionContainer from 'components/Connection/container';

import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <HeaderContainer />
          <Switch>
            <Route exact path="/" component={ConnectionContainer} />
            <Route path="/user" component={UserInfoContainer} />
            <Route path="/friends" component={FriendsContainer} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
