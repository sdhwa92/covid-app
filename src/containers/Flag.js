import { connect } from 'react-redux';
import Flag from '../components/Flag';

const mapReduxStateToReactProps = (state) => {
  return {
    country: state.country,
    countryCode: state.countryCode
  }
};

export default connect(mapReduxStateToReactProps)(Flag);