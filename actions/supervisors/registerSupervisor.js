import { DISSERTATION_BASE_URL } from "../../config/urls";

const registerSupervisor =
  (values) =>
  async (dispatch, _getState, { api }) => {
    function onSuccess(response) {
      return response.data;
    }

    function onError(error) {
      return Promise.reject(error.response);
    }

    try {
      const response = await api.post(
        `${DISSERTATION_BASE_URL}/supervisor/register`,
        values,
      );
      return onSuccess(response);
    } catch (error) {
      return onError(error);
    }
  };

export default registerSupervisor;
