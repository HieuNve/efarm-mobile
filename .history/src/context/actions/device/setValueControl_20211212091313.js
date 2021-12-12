import {
  SET_CONTROL_FAIL,
  SET_CONTROL_LOADING,
  SET_CONTROL_SUCCESS,
} from '../../../constants/actionTypes';
import axios from '../../../helpers/axiosInterceptor';

export default () =>
  ({light}) =>
  dispatch => {
    dispatch({
      type: SET_CONTROL_LOADING,
    });
    console.log('ID Farms.Device: ', `/sensors/${deviceID}/`);
    axios
      .get(`/sensors/${deviceID}/`)
      .then(res => {
        dispatch({
          type: SET_CONTROL_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch(err => {
        console.log('errors: ', err);
        dispatch({
          type: SET_CONTROL_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'some thing went wrong, try again'},
        });
      });
  };
