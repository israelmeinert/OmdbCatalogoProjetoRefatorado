import './style.css'
import { OmdbApi } from "./service/OmdbApi.ts";
import { Table, createRows, AddEventOnClick } from "./components/Table.ts"
import { Modal, setContentModal, initEvents, toggleModal } from "./components/Modal.ts"
import { Search,initEvent } from "./components/Search.ts"
import { IMovie } from "./shared/Interface"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="row">
        ${Search()}
    </div>
    <div class="row" id="movie-catalog"> 
        ${Table()}
    </div>
    ${Modal()}
`

const instance = new OmdbApi()
let _movies : IMovie[] = []
let _movieSelected: IMovie | null = null

const setMovies = (movies: IMovie[]): void => {
    _movies = movies
    createRows(_movies)
}

AddEventOnClick((element: HTMLElement):void => {
    const movieFound = _movies.find(movie=> element.id == movie.id)!
    setMovieSelected(movieFound)
    toggleModal()
})

const setMovieSelected = (movie: IMovie): void => {
    _movieSelected = movie
    setContentModal(_movieSelected)
}

initEvents()
initEvent(async (title:string) : Promise<void> => {
    setMovies(await instance.findMoviesByName(title))
})
