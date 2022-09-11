import { URLAPI } from "../../const";
import axios from "axios";
import {
  BOOK_LIST_FAIL,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
} from "../../constants";

export const listBooks = (user: string) => async (dispatch: any) => {
  dispatch({ type: BOOK_LIST_REQUEST });
  try {
    const { data } = await axios.get(`${URLAPI}/books/${user}`);
    dispatch({ type: BOOK_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: BOOK_LIST_FAIL, payload: err });
  }
};
