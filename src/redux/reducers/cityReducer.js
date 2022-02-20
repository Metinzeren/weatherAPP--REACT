import { ActionTypes } from "../action/actionTypes";
const INITIAL_STATE = {
  addCitys: [],
  postLoading: false,
  errorMessage: "",
};
export const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CITY: {
      return {
        ...state,
        addCitys: [...state.addCitys, action.payload],
      };
    }
    case ActionTypes.DELETE_CITY: {
      return {
        ...state,
        addCitys: state.addCitys.filter((x) => x.name !== action.payload),
      };
    }
    case ActionTypes.POST_LOADING: {
      return {
        ...state,
        postLoading: action.payload,
      };
    }
    case ActionTypes.ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    case ActionTypes.REMOVE_CITYS: {
      return {
        ...state,
        addCitys: [],
      };
    }
    case ActionTypes.REFRESH_CITYS: {
      return {
        ...state,
        addCitys: action.payload,
      };
    }

    default:
      return state;
  }
};
