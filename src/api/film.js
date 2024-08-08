



import axios from "../axios";
import { api_key } from "../constants"

class FilmApi {

    // method
    async fethPopularMovie() {
        const url = '/movie/popular' + api_key + '&language=ru'
        const response = await axios(url)
        return await response.data
    }
}


export default new FilmApi();