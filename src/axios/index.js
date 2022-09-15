import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:8096/organogram/v1/',
});
export default instance;
