import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
