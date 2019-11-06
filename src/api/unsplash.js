import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 421f841112893b9b3d2ebea645af0681324bffb82a6227a4e9d578a60ce04cc5"
  }
});
