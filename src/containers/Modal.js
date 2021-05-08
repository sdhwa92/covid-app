import { connect } from 'react-redux';
import Modal from '../components/Modal';

const mapReduxStateToReactProps = (state) => {
  return {
    country: state.country,
    countryCode: state.countryCode
  }
};

const mapReduxDispatchToReactProps = (dispatch) => {
  return {
    onSelectCountry: (countryData) => {
      dispatch({
        type: 'SWITCH_COUNTRY',
        country: countryData.country,
        countryCode: countryData.countryCode
      });
    }
  }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Modal);