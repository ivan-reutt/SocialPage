const accessToken = (state = null, { type, token }) => {
  switch (type) {
    case 'GET_TOKEN':
      return token;
    default:
      return state;
  }
};

export default accessToken;
