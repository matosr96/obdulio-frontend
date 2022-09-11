import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Dispatch,
} from "redux";
import thunk from "redux-thunk";
import * as RR from "react-redux";
import { listBookReducer, LoginReducer } from "../reducers";

const initialState = {
  userSingin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo") || "")
      : null,
  },
};

const reducer = combineReducers({
  userSingin: LoginReducer,
  bookList: listBookReducer,
});

const composeEnhancer = compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

type StoreEvent = any;
interface Store {
  reviews: string;
}
export const useSelector: RR.TypedUseSelectorHook<Store> = RR.useSelector;
export const useDispatch = () => RR.useDispatch<Dispatch<StoreEvent>>();
export default store;
