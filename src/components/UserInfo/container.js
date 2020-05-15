import { connect } from 'react-redux';
import UserInfo from './component';

const mapStateToProps = (state) => ({
  token: state.accessToken,
});

export default connect(mapStateToProps)(UserInfo);
