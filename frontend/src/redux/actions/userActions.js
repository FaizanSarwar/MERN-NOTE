import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";
import axios from "axios";
//by using thunk middleware we can now use async function in redux to call api... use this syntax everywhere
export const login = (email, password) => async (dispatch) => {
  try {
    // first of all user login request action trigger
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        // "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      {
        email,
        password,
      },
      config
    );
    // console.log(data);
    //after successfully post dispatch USER_LOGIN_SUCCESS and pass data as payload...
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (errors) {
    //if there is an error dispatch USER_LOGIN_FAIL
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        errors.response && errors.response.data.message
          ? errors.response.data.message
          : errors.message,
    });
  }
};

// logout action
export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

//register action

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config = {
      headers: {
        // "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      {
        name,
        email,
        password,
      },
      config
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (errors) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        errors.response && errors.response.data.message
          ? errors.response.data.message
          : errors.message,
    });
  }
};
