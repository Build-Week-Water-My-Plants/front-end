import axios from "axios";

export const axiosInstance = () => {
  return axios.create({
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    baseURL: "http://doc-watermyplants.heroku.com/"
  });
};
