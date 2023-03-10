import axios from "axios";

function api(ctx = null) {
  let config = {
    baseURL: import.meta.env.VITE_API,
    headers: {
      "Accept-Language": (
        localStorage.getItem("lang")
      ).replace("_", "-"),
    },
  };
  return axios.create(config);
}
export default api;
export { api };