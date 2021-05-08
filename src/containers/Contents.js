import { connect } from 'react-redux';
import Contents from '../components/Contents';

const mapReduxStateToReactProps = (state) => {
  return {
    country: state.country,
    countryCode: state.countryCode
  }
};

export default connect(mapReduxStateToReactProps)(Contents);