import axios from "axios";

export const FETCH_USER = "FETCH_USER";

export function fetchUser() {
  const url = `http://127.0.0.1:5000/api/1`;
  const request = axios.get(url);

  return {
    type: FETCH_USER,
    payload: request
  };
}