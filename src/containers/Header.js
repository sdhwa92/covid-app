import { connect } from 'react-redux';
import Header from '../components/Header';

const mapReduxStateToReactProps = (state) => {
  return {
    country: state.country,
    countryCode: state.countryCode
  }
}

export default connect(mapReduxStateToReactProps)(Header);