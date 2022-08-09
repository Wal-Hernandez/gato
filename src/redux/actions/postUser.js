import { POST_USER,DB_HEROKU } from "./actionTypes";
import axios from "axios";

export const postUser = (userDb) => {
  return async function (dispatch) {
    try {
      let result = await axios.post(`${DB_HEROKU}/users`, userDb);
      return dispatch({
        type: POST_USER,
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
