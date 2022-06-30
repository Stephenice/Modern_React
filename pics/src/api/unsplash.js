import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID KCT1GT6HBrUDlZPU1wi8h3gL3RY7ww51Gt-eUB9KBUw",
  },
});
