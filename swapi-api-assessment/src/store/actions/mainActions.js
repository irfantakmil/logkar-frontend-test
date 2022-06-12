import axios from "axios";
import * as swapi from './index';

export const getFilms = () => {
    return async (dispatch) => {
        try {
            await axios.get("https://swapi.dev/api/films/")
            .then(function(response){
                let results = response.data.results;
                dispatch(swapi.getFilms(results));
            })
        } catch(err){
            console.log(err);
        }
    }
}

export const getCharacters = () => {
    return async (dispatch) => {
        try {
            await axios.get("https://swapi.dev/api/people")
            .then(function(response){
                let characters = response.data.results;
                dispatch(swapi.getCharacters(characters));
            })
        } catch(err){
            console.log(err);
        }
    }
}

export const getPlanets = () => {
    return async (dispatch) => {
        try {
            await axios.get("https://swapi.dev/api/planets")
            .then(function(response){
                let planets = response.data.results;
                dispatch(swapi.getPlanets(planets));
            })
        } catch(err){
            console.log(err);
        }
    }
}