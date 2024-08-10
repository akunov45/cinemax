

import axios from "axios";

const instanceAxios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: 'ru-Ru'
    }
})

export default instanceAxios;

// refactoring  
