import axios from "axios";

export default axios.create({
  baseURL: "https://3960-83-245-143-4.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
