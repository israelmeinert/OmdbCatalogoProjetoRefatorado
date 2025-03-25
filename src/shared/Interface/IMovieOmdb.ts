export interface IMovieOmdb {
    imdbID:string,
    Title:string,
    Year:string,
    Genre :string,
    Plot:string,
    Poster:string,
    Director:string,
    Awards:string
}

export interface IResultOmdb {
    Search: IMovieOmdb[],
    totalResults: string
}

