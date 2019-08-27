import axios from "axios";

export const axiosInstance = () => {
  return axios.create({
    headers: {
      Authorization: `Basic ${btoa("turtle-banana:banana-turtle")}`,
      "Content-type": "application/x-www-form-urlencoded"
    }
  });
};

// "https://doc-watermyplants.herokuapp.com/login",
// `grant_type=password&username=admin&password=password`,
// {
//   headers: {
//     Authorization: `Basic ${btoa("turtle-banana:banana-turtle")}`,
//     "Content-Type": "application/x-www-form-urlencoded"
//   }
// }
