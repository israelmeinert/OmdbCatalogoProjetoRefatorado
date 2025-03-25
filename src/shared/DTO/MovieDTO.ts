import {IMovieOmdb, IMovie} from "../Interface";
import Movie from "../Model/Movie.ts";


export default class MovieDTO{
    constructor() {}
    static DtoToClass(moviesOmdb:IMovieOmdb[]): IMovie[] {
        return moviesOmdb.map(movieOmdb => {
            const formatedMovie: IMovie = {
                id: movieOmdb.imdbID,
                title: movieOmdb.Title,
                year:movieOmdb.Year,
                genre:movieOmdb.Genre,
                description:movieOmdb.Plot,
                image:movieOmdb.Poster,
                director:movieOmdb.Director,
                awards:movieOmdb.Awards,
            }
            return new Movie(formatedMovie)
        })
    }
}