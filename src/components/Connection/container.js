import { connect } from 'react-redux';
import Connection from './component';

const mapStateToProps = (state) => ({
  token: state.accessToken,
});

export default connect(mapStateToProps)(Connection);
