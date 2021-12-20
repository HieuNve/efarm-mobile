import {
  CREATE_FARMS_FAIL,
  CREATE_FARMS_LOADING,
  CREATE_FARMS_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInterceptor";
export default (form) => (uuid) => (dispatch) => (onSuccess) => {
  const requesPayload = {
    farmName: form.farmName,
    location: form.location || "",
    timeStart: form.timeStart || "",
    timeFinish: form.timeFinish || "",
    area: form.area || "",
    personID: uuid,
    deviceID: form.deviceID,
    treeID: form.treeID,
  };
  console.log('personID', personID);
  dispatch({
    type: CREATE_FARMS_LOADING,
  });
  axios
    .post("/farm/", requesPayload)
    .then((res) => {
      dispatch({
        type: CREATE_FARMS_SUCCESS,
        payload: res.data.data,
      });

      onSuccess();
      console.log('Create Farm', res.data.data)
    })
    .catch((err) => {
      dispatch({
        type: CREATE_FARMS_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "some thing went wrong, try again" },
      });
    });
};
