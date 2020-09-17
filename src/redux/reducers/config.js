import { CHANGE_THEME, CHANGE_LANGUAGE, ADD_NOTIFICATION, INIT_NOTIFICATION, UPDATE_NOTIFICATION } from "../actions/types";
import { CONFIG_FAILED, CONFIG_LOADING } from "../actions/config";

const intialState = {
  theme: "default",
  language: "en",
  notifyData: [],
  isReadNotify: true,
  isLoading: false,
  isSuccess: false,
  errorMsg: "",
};

export const configReducer = (state = intialState, { type, payload }) => {
  let newNotifyData = JSON.parse(JSON.stringify(state.notifyData));

  switch (type) {
    case CONFIG_LOADING:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isLoggedIn: false,
        errorMsg: "",
      };
    case CONFIG_FAILED:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        errorMsg: payload,
      };
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: payload,
        isLoading: false,
        isSuccess: false,
        errorMsg: payload,
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme: payload,
        isLoading: false,
        isSuccess: true,
        errorMsg: "",
      };
    case ADD_NOTIFICATION:
      newNotifyData.push(payload);
      
      return {
        ...state,
        notifyData: newNotifyData,
        isReadNotify: false,
        isLoading: false,
        isSuccess: true,
        errorMsg: "",
      };
    case INIT_NOTIFICATION:
        return {
          ...state,
          notifyData: [],
          isReadNotify: true,
          isLoading: false,
          isSuccess: true,
          errorMsg: "",
        };
    case UPDATE_NOTIFICATION:
      let isReadNotify = payload.check;
      newNotifyData.forEach((item, index) =>{
        if (item.id == payload.id) {
          newNotifyData[index] = payload
        }
        else {
          if(item.check == false)
            isReadNotify = false
        }
      })

      return {
        ...state,
        notifyData: newNotifyData,
        isReadNotify: isReadNotify,
        isLoading: false,
        isSuccess: true,
        errorMsg: "",
      };
    default:
      return state;
  }
};
