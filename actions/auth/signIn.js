import { onSignIn } from "../../lib/auth";

const signIn =
  (values) =>
  async (dispatch, _getState, { api }) => {
    function onSuccess(response) {
      if (response.data.isSuccess) {
        onSignIn(response);
        return response;
      }
      // @note explicitly throwing error
      throw { response: { message: response.data.message } };
    }

    function onError(error) {
      return Promise.reject(error.response);
    }

    try {
      const response = await api.post("/auth/login", values);
      return onSuccess(response);
    } catch (error) {
      return onError(error);
    }
  };

export default signIn;
