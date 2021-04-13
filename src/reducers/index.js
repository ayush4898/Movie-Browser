import {ADD_FAVOURITE}  from '../actions/index.js'
import { ADD_MOVIE , REMOVE_FAVOURITE }  from '../actions/index.js'


const initialState = {
    list: [],
    favourites : []
}

export function movie(state = initialState, action)
 {
//     if (action.type === ADD_MOVIE)
//     {
//         return {
//             ...state,
//             list: action.movies
//         }
//     }
//     return state;
    switch (action.type)
    {
        case ADD_MOVIE: {
            return {
                ...state,
                list: action.movies
            }    
        }
        case ADD_FAVOURITE: {
            return {
                ...state,
            favourites: [action.movie , ...state.favourites] 
            }
        }
        case REMOVE_FAVOURITE: {
            return {
                ...state,
                favourites: [...state.favourites.filter(movie=> movie !== action.movie)]
            }
        }
        default: {
            return state
        }
        }
    }