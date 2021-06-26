import axios from "axios";

const KEY = "AIzaSyAnNbWzhuCKk190cQmG4QRv8tch6Y8Bygo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
