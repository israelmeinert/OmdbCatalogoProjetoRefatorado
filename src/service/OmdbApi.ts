import MovieDTO from "../shared/DTO/MovieDTO.ts";
import { IMovieOmdb, IResultOmdb, IMovie, IHttp } from "../shared/Interface";

export class OmdbApi {
    private readonly url: string;
    constructor(private http: IHttp, apiKey: string) {
        this.url = `http://www.omdbapi.com/?apikey=${apiKey}`;
    }

    async findMoviesByName(name: string): Promise<IMovie[]> {
        const resultOmDb = await this.http.get<IResultOmdb>(`${this.url}&s=${name}`);
        const promises = resultOmDb.Search.map((movieOmbd) => this.findMovieId(movieOmbd));
        const moviesOmdb = await Promise.all(promises);
        return MovieDTO.DtoToClass(moviesOmdb);
    }

    async findMovieId(movieOmdb: IMovieOmdb): Promise<IMovieOmdb> {
        return this.http.get<IMovieOmdb>(`${this.url}&i=${movieOmdb.imdbID}`);
    }
}

