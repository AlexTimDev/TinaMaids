import { CHANGE_THEME, CHANGE_LANGUAGE, ADD_NOTIFICATION, INIT_NOTIFICATION, UPDATE_NOTIFICATION } from "./types";

export const CONFIG_LOADING = "config_loading";
export const CONFIG_FAILED = "config_failed";

export const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  payload: theme,
});

export const changeLanguage = (theme) => ({
  type: CHANGE_LANGUAGE,
  payload: theme,
});

export const addNotification = (notifyData) => {
  return {
  type: ADD_NOTIFICATION,
  payload: notifyData,
}};

export const initNotification = () => {
  return {
    type: INIT_NOTIFICATION,
    payload: [],
  }
};

export const updateNotification = (notifyData) => {
  return {
    type: UPDATE_NOTIFICATION,
    payload: notifyData,
  }
};
