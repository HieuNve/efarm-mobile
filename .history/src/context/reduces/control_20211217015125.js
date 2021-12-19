import {
  GET_CONTROL_FAIL,
  GET_CONTROL_LOADING,
  GET_CONTROL_SUCCESS,
  SET_CONTROL_FAIL,
  SET_CONTROL_LOADING,
  SET_CONTROL_SUCCESS,
} from '../../constants/actionTypes';

const control = (state, {type, payload}) => {
  switch (type) {
    case SET_CONTROL_LOADING:
      return {
        ...state,
        setValueControl: {
          ...state.setValueControl,
          loading: true,
          error: null,
        },
      };
    case SET_CONTROL_SUCCESS:
      return {
        state,
        setValueControl: {
          ...state.setValueControl,
          loading: false,
          data: payload,
          error: null,
        },
        // getValueControl: {
        //   ...state.getValueControl,
        //   loading: false,
        //   data: [payload, ...state.getValueControl.data],
        //   error: null,
        // },
      };
    case SET_CONTROL_FAIL:
      return {
        ...state,
        setValueControl: {
          ...state.setValueControl,
          loading: false,
          error: payload,
        },
      };
    case GET_CONTROL_LOADING:
      return {
        ...state,
        getValueControl: {
          ...state.getValueControl,
          loading: true,
          error: null,
        },
      };
    case GET_CONTROL_SUCCESS:
      return {
        ...state,
        getValueControl: {
          ...state.getValueControl,
          loading: false,
          data: payload,
          error: null,
        },
      };
    case GET_CONTROL_FAIL:
      return {
        ...state,
        getValueControl: {
          ...state.getValueControl,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};
export default control;
