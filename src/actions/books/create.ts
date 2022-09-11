import {
  BOOK_CREATE_FAIL,
  BOOK_CREATE_REQUEST,
  BOOK_CREATE_SUCCESS,
} from "../../constants";
import axios from "axios";
import { URLAPI } from "../../const";

export const createBook = (props: any) => async (dispatch: any) => {
  dispatch({ type: BOOK_CREATE_REQUEST, payload: { ...props } });
  try {
    const { data } = await axios.post(`${URLAPI}/books`, {
      ...props,
    });
    dispatch({ type: BOOK_CREATE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: BOOK_CREATE_FAIL, payload: err });
  }
};
