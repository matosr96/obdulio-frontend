import { URLAPI } from "../../const";
import axios from "axios";
import {
  BOOK_UPDATE_FAIL,
  BOOK_UPDATE_REQUEST,
  BOOK_UPDATE_SUCCESS,
} from "../../constants";

export const updateBook = (id: string, props: any) => async (dispatch: any) => {
    dispatch({ type: BOOK_UPDATE_REQUEST, payload: { props } });
    try {
      const { data } = await axios.put(`${URLAPI}/books/${id}`, props);
      dispatch({ type: BOOK_UPDATE_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: BOOK_UPDATE_FAIL, payload: err });
    }
  };
