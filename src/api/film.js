



import axios from "../axios";

class FilmApi {

    // method
    async fethPopularMovie() {
        const { data } = await axios('/movie/popular')
        return await data
    }
    async fethMovieGenres() {
        const { data } = await axios('genre/movie/list')
        return await data
    }
}


export default new FilmApi();

