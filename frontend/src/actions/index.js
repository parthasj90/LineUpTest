import axios from "axios";

export const FETCH_USER = "FETCH_USER";

export function fetchUser(id) {
  const url = `http://localhost:5000/api/${id}`;
  const request = axios.get(url);

  return {
    type: FETCH_USER,
    payload: request,
  };
}
