import {
  SET_CONTROL_FAIL,
  SET_CONTROL_LOADING,
  SET_CONTROL_SUCCESS,
} from '../../../constants/actionTypes';
import axios from '../../../helpers/axiosInterceptor';

export default form => dispatch => {
  const requesPayload = {
    deviceID: form.farmName,
    relay1: form.location || '',
    relay2: form.timeStart || '',
    relay3: form.timeFinish || '',
    relay4: form.area || '',
  };
  dispatch({
    type: SET_CONTROL_LOADING,
  });
  axios
    .post(`/addSensors/`, requesPayload)
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
