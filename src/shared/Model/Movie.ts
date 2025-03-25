import {IMovie} from "../Interface";

export default class Movie {
    id: string
    title:  string
    year: string
    genre: string
    description: string
    image: string
    director: string
    awards: string
    constructor({id, title, year, genre, description, image, director, awards}: IMovie) {
        this.id= id
        this.title= title
        this.year= year
        this.genre= genre
        this.description= description
        this.image= image
        this.director= director
        this.awards= awards
    }
}