import axios from 'axios';
const api_covid = axios.create({
    baseURL: 'https://covid19.mathdro.id'
});

export default api_covid;