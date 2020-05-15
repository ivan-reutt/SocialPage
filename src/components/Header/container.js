import { connect } from 'react-redux';
import getToken from 'redux/actions/token';
import Header from './component';

const mapStateToProps = (state) => ({
  token: state.accessToken,
});

const mapDispatchToProp = (dispatch) => ({
  getToken: (token) => dispatch(getToken(token)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Header);
