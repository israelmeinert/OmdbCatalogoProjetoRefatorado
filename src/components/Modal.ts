import {IMovie} from "../shared/Interface"

let $modal: HTMLDivElement | null = null
let $modalBody: HTMLDivElement | null = null
let $btnClose: NodeListOf<HTMLDivElement> | null = null

const getModalElement = (): HTMLDivElement => {
    $modal ||= document.querySelector<HTMLDivElement>(".modal")!
    return $modal
}

const getModalBodyElement = (): HTMLDivElement => {
    $modalBody ||= document.querySelector<HTMLDivElement>(".modal-body")!
    return $modalBody
}

const getBtnClose = (): NodeListOf<HTMLDivElement> => {
    $btnClose ||= document.querySelectorAll<HTMLDivElement>(".close-modal")!
    return $btnClose
}

export const Modal = (): string=> `
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Detalhes do filme</h5>
            <button type="button" class="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary close-modal" data-bs-dismiss="modal">Ok</button>
          </div>
        </div>
      </div>
    </div>`

export const setContentModal = (movie: IMovie): void => {
    getModalBodyElement().innerHTML = `
    <div class="row">
        <div class="col-6">
            <img  class="img-fluid" src=${movie.image} alt=${movie.title}>
        </div>
        <div class="col-6">
            <h3>${movie.title}</h3>
            <p class="text-start">${movie.description}</p>
            <p class="text-start"><strong>Ano:</strong> ${movie.year}</p>
            <p class="text-start"><strong>Gênero:</strong> ${movie.genre}</p>
            <p class="text-start"><strong>Direção:</strong> ${movie.director}</p>
            <p class="text-start"><strong>Prêmios: </strong> ${movie.awards}</p>
        </div>
    </div>`
}

export const initEvents=  ()=> {
    getBtnClose()
        .forEach((btn) => {
            btn.addEventListener('click', () => toggleModal())
        })
}
export const toggleModal= (): void=>  {
    getModalElement()
        .classList.toggle('show');
}