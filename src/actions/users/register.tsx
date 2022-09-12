import { URLAPI } from "../../const";
import swal from "sweetalert";
import axios from "axios";
import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../../constants";

export const registerUser = (props: any) => async (dispatch: any) => {
  const { name, username, password } = props;
  dispatch({
    type: USER_REGISTER_REQUEST,
    payload: { name, username, password },
  });

  try {
    const { data } = await axios.post(`${URLAPI}/register`, {
      name,
      username,
      password,
    });

    if (data.uuid) {
      swal("Registro Exitoso", {
        icon: "success",
        buttons: ["Iniciar Sesion"],
        dangerMode: true,
      });
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      window.location.href = "/";
    } else {
      window.location.href = "/";
    }
  } catch (error: any) {
    if (error.response.data.error) {
      swal(error.response.data.error, {
        icon: "warning",
        buttons: ["OK!"],
        dangerMode: true,
      });
    }
  }
};
