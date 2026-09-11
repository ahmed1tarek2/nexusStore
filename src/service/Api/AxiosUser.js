import axios from "axios";




const AxiosUser = axios.create({
  baseURL: "https://6a661a19189fe5869eb654b3.mockapi.io", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});