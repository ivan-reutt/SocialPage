import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsonp from 'axios-jsonp';
import { List, Avatar } from 'antd';

import PropTypes from 'prop-types';
import { StyledSpin, StyledContent, StyledTitle, StyledList } from './styles';

const Friends = ({ token }) => {
  const url = `https://api.vk.com/method/friends.get?&fields=photo_100,online&access_token=${token}&v=5.103`;

  const [friendsNum, setFriendsNum] = useState(null);
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url,
      adapter: jsonp,
    })
      .then((res) => {
        setFriendsNum(res.data.response.count);
        setFriendsList(res.data.response.items);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <StyledContent>
      <StyledTitle level={4}>Друзей {friendsNum}</StyledTitle>
      {friendsList.length > 0 ? (
        <StyledList
          itemLayout="horizontal"
          dataSource={friendsList}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar size={64} src={item.photo_100} />}
                title={
                  <span>
                    {item.first_name} {item.last_name}
                  </span>
                }
              />
            </List.Item>
          )}
        />
      ) : (
        <StyledSpin />
      )}
    </StyledContent>
  );
};

Friends.propTypes = {
  token: PropTypes.string,
};

export default Friends;
