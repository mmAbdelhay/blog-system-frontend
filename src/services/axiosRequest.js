import axios from "axios";
import { ServerIP } from "../config/config";

export const axiosRequests = async (type, url, payload = null) => {
  try {
    let response;
    if (type === "post") {
      response = await axios.post(`${ServerIP}${url}`, payload);
    } else if (type === "get") {
      response = await axios.get(`${ServerIP}${url}`);
    } else if (type === "put") {
      response = await axios.put(`${ServerIP}${url}`, payload);
    } else if (type === "delete") {
      response = await axios.delete(`${ServerIP}${url}`);
    }
    return response ? [true, response.data] : false;
  } catch (err) {
    console.log(`request error: ${err.response}`);
    return [false, err.response];
  }
};
