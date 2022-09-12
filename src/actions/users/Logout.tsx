import { USER_SIGNOUT } from "../../constants";

export const signout = () => (dispatch: any) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_SIGNOUT });
};
