import { GET_CHARACTERS, GET_FILMS, GET_PLANETS } from "../types";

export default function swapiReducer(state={},action){
    switch(action.type){
        case GET_FILMS:
            return {...state, films: action.payload}
        case GET_CHARACTERS:
            return {...state, characters: action.payload}
        case GET_PLANETS:
            return {...state, planets: action.payload}
        default:
            return state
    }
}