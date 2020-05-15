import { connect } from 'react-redux';
import Friends from './component';

const mapStateToProps = (state) => ({
  token: state.accessToken,
});

export default connect(mapStateToProps)(Friends);
