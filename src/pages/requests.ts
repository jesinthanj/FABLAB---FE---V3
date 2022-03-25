import axios from "axios";

export const endpoint = "http://192.168.2.160:5000/api";
export const imgurl = "http://192.168.2.160:5000";

export function axiosGet(url: string) {
  return axios.request({
    method: "GET",
    url: `${endpoint}${url}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") ?? "null"}`,
    },
  });
}

export function axiosPost(url: string, data: any) {
  return axios.request({
    method: "POST",
    url: `${endpoint}${url}`,
    data: data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") ?? "null"}`,
    },
  });
}

export function axiosPatch(url: string, data: any) {
  return axios.request({
    method: "PATCH",
    url: `${endpoint}${url}`,
    data: data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") ?? "null"}`,
    },
  });
}

export function axiosDelete(url: string, data: any) {
  return axios.request({
    method: "DELETE",
    url: `${endpoint}${url}`,
    data: data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") ?? "null"}`,
    },
  });
}

// export function axiosRequest(url = "/", method = "GET", data = {}) {
//   const token = localStorage.getItem("token") ?? "null";
//   return axios.request({
//     url: `${endpoint}${url}`,
//     method: method,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     data: data,
//   });
// }
