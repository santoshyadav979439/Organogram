import axios from 'axios'
const instance = axios.create({
  baseURL:
    'https://organogram-17c0e-default-rtdb.asia-southeast1.firebasedatabase.app/',
});
export default instance;
