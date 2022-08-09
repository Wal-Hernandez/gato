import axios from "axios";
import { FILTER_BY_DATE,DB_HEROKU } from "./actionTypes";

export const filterByDate = (destination, start) => {
  return async (dispatch) => {
    try {
      let result = await axios.get(
        `${DB_HEROKU}/packages?destination=${destination}&start=${start}`
      );
      return dispatch({
        type: FILTER_BY_DATE,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};