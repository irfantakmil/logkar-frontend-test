import { GET_FILMS, GET_CHARACTERS, GET_PLANETS } from "../types";

export const getFilms = (films) => ({
    type: GET_FILMS,
    payload: films
})

export const getCharacters = (characters) => ({
    type: GET_CHARACTERS,
    payload: characters
})

export const getPlanets = (planets) => ({
    type: GET_PLANETS,
    payload: planets
})