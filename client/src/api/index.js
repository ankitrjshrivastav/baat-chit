import axios from "axios";

const API = axios.create({
  baseURL: "https://baat-chit-api.onrender.com/api",
});

export const getRoomExists = (roomId) => API.get(`/room-exists/${roomId}`);
