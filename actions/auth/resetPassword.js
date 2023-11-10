import { showNotification } from "../../reducers/notification/notificationReducer";

const resetPassword =
  (values) =>
  async (dispatch, _getState, { api }) => {
    function onSuccess(response) {
      if (response.data.isSuccess) {
        return response.data.isSuccess;
      }
      dispatch(showNotification(response.data.message));
      return undefined;
    }

    function onError(error) {
      return Promise.reject(error.response);
    }

    try {
      const response = await api.post("/auth/confirm-reset-password", values);
      return onSuccess(response);
    } catch (error) {
      return onError(error);
    }
  };

export default resetPassword;
