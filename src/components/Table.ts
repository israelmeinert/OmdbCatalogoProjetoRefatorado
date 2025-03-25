import {IMovie} from "../shared/Interface";

let $tableResult: HTMLTableElement | null = null


const getTableElement = () : HTMLTableElement => {
    $tableResult  ||=  document.querySelector<HTMLTableElement>('#result')!
    return $tableResult
}


export const Table = (): string=> `
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">Titulo</th>
                <th scope="col">Ano</th>
                <th scope="col">Genero</th>
            </tr>
        </thead>
        <tbody id="result">
        </tbody>
    </table>
`
const actionOnClick: Function[] = []
export const AddEventOnClick = (callback:Function): void => { actionOnClick.push(callback) }

export const createRows = (movies : IMovie[]): void => {
    getTableElement().innerHTML =  movies.map((movie: IMovie):string => createRow(movie)).join("")
    getTableElement().childNodes.forEach((child:ChildNode) => {
        child.addEventListener(`click`, function (){
            actionOnClick.forEach(( callback :Function)=>{ callback(this)})
        })
    })

}
export const createRow = (movie:IMovie): string=> `
    <tr id=${movie.id}>
        <td>${movie.title}</td>
        <td>${movie.year}</td>
        <td>${movie.genre}</td>
    </tr>
`
