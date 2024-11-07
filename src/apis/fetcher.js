import axios from 'axios';
import { API_URL, TOKEN_CYBERSOFT } from '../constants';

const fetcher = axios.create({
  baseURL: API_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
  },
});

// call api get users

// => nhấn 1 button
// => gọi api
// => kiểm tra có login hay không , nếu có thì add thêm token vào headers , modify dữ liệu gửi lên serve
// => chờ
// => server gửi về dữ liệu
// => kết quả trả về

fetcher.interceptors.request.use((config) => {
  console.log('interceptors config', config);
  const currentUser = JSON.parse(localStorage.getItem('user'));
  console.log('currentUser', currentUser);
  if (currentUser) {
    config.headers.Authorization = `Bearer ${currentUser.accessToken}`;
  }
  return config;
});

export default fetcher;
