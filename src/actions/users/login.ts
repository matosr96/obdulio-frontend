import { URLAPI } from "@/const";
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "@/constants";
import axios from "axios";
import swal from "sweetalert";

export const LoginUser = (username: String, password: String) => async (dispatch: any) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { username, password } });

    try {
      const { data } = await axios.post(`${URLAPI}/login`, {
        username,
        password,
      });
      if (
        data.message !== "Usuario no existe o esta inactivo" ||
        "Contrasena incorrecta"
      ) {
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
        window.location.href = "/";
      }
    } catch (err: any) {
      const { message } = err.response.data;

      if (message) {
        swal(message, {
          icon: "warning",
          buttons: ["OK!"],
          dangerMode: true,
        });
      }

      dispatch({
        type: USER_SIGNIN_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
