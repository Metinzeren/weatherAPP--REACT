import { ActionTypes } from "./actionTypes";
import axios from "axios";

export const addCity = (city) => (dispatch) => {
  dispatch({ type: ActionTypes.POST_LOADING, payload: true });
  dispatch({type:ActionTypes.ERROR_MESSAGE, payload:""})
  axios
    .post(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=1cddce61f397563242a31ff9d45beea1"
    )
    .then((response) => {
      dispatch({ type: ActionTypes.ADD_CITY, payload: response.data });
      dispatch({ type: ActionTypes.POST_LOADING, payload: false });
    })
    .catch((err) => {
      dispatch({ type: ActionTypes.ERROR_MESSAGE, payload: err.toString()});
    });
};
export const deleteCity = (city) => (dispatch) => {
  dispatch({ type: ActionTypes.DELETE_CITY, payload: city });
};

export const removeCitys = () => (dispatch) => {
  dispatch({ type: ActionTypes.REMOVE_CITYS });
};
export const refreshCitys = (citys) => (dispatch) => {
  citys.map((item) => {
    axios
      .post(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          item.name +
          "&appid=1cddce61f397563242a31ff9d45beea1"
      )
      .then((response) => {
        dispatch(deleteCity(item.name));
        dispatch(addCity(item.name));
      });
  });
};
