import { useNavigate } from "react-router-dom";
import { USER_SIGNOUT } from "../../constants";

export const signout = () => (dispatch: any) => {
  let navigate = useNavigate();
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_SIGNOUT });
  navigate("/login");
};
