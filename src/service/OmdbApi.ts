import MovieDTO from "../shared/DTO/MovieDTO.ts";
import {IMovieOmdb, IResultOmdb, IMovie} from "../shared/Interface";

export class OmdbApi {
    private url: string = `http://www.omdbapi.com/?apikey=${'token'}`

    async findMoviesByName(name: string): Promise<IMovie[]> {
        const response = await fetch(`${this.url}&s=${name}`)
        const ResultOmDb: IResultOmdb = await response.json()
        const PromisesOmdb: Promise<IMovieOmdb>[] =   ResultOmDb
            .Search
            .map(movieOmbd => this.findMovieId(movieOmbd))
        const moviesOmdb: IMovieOmdb[] = await Promise.all(PromisesOmdb)
        return MovieDTO.DtoToClass(moviesOmdb)
    }

    async findMovieId(movieOmdb:  IMovieOmdb): Promise<IMovieOmdb> {
        const response = await fetch(`${this.url}&i=${movieOmdb.imdbID}`)
        return await response.json()
    }
}