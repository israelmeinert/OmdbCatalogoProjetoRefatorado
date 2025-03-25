
let $search: HTMLInputElement | null = null
let $btnSearch: HTMLInputElement | null = null

const getSearchElement = (): HTMLInputElement => {
    $search ||= document.querySelector<HTMLInputElement>("#search")!
    return $search
}

const getBtnSearchElement = (): HTMLDivElement => {
    $btnSearch ||= document.querySelector<HTMLInputElement>("#btn-search")!
    return $btnSearch
}

export const Search = (): string =>  {
    return `
    <div class="col-10"> 
        <input id="search" placeholder="Pesquise o filme desejado" class="form-control form-control-lg">
    </div>
    <div class="col-2">
        <button id="btn-search" class="btn btn-primary btn-lg"> Buscar </button>
    </div>
    `
}

export const initEvent = (callback: Function): void => {
    getBtnSearchElement()
        .addEventListener('click', () => {
            callback(getSearchElement().value)
    })
}