import axios from "axios";

function axiosWithAuth() {
  const token = localStorage.getItem("token");///getting token and saving to local storage

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
export default axiosWithAuth; 