import axios from "axios";

export const FETCH_USER = "FETCH_USER";

export function fetchUser(id) {
  console.log(id);
  const url = `http://127.0.0.1:5000/api/${id}`;
  const request = axios.get(url);

  return {
    type: FETCH_USER,
    payload: request
  };
}