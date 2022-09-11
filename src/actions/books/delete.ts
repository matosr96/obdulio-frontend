import { URLAPI } from "../../const";
import {
  BOOK_DELETE_REQUEST,
  BOOK_DELETE_SUCCESS,
  BOOK_LIST_FAIL,
} from "../../constants";
import axios from "axios";

export const deleteBook = (id: any) => async (dispatch: any) => {
  dispatch({ type: BOOK_DELETE_REQUEST, payload: id });
  try {
    const { data } = await axios.delete(`${URLAPI}/books/${id}`);
    dispatch({ type: BOOK_DELETE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: BOOK_LIST_FAIL, payload: err });
  }
};
