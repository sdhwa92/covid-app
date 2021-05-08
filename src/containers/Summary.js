import { connect } from 'react-redux';
import Summary from '../components/Summary';

const mapReduxStateToReactProps = (state) => {
  return {
    country: state.country,
    countryCode: state.countryCode
  }
}

export default connect(mapReduxStateToReactProps)(Summary);