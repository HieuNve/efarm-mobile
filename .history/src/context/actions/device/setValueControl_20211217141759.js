import {
  SET_CONTROL_FAIL,
  SET_CONTROL_LOADING,
  SET_CONTROL_SUCCESS,
} from '../../../constants/actionTypes';
import axios from '../../../helpers/axiosInterceptor';

export default form => dispatch => {
  const requesPayload = {
    relay1: form.relay1,
    relay2: form.relay2,
    relay3: form.relay3 || undefined,
    relay4: form.relay4 || undefined,
    deviceID: 1,
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
      console.log('set datasad', res.data.data);
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
