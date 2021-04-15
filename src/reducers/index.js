// we pass the reducer to be used by default into the declaration of a store
// work of reducer is to return updated state
// basically app -- > action ->string & value-> (in reducer) check the string --> (string matches) 
// we update the state accordingly


import { combineReducers } from 'redux'
import { ADD_FAVOURITE } from '../actions/index.js'
import { ADD_MOVIE , REMOVE_FAVOURITE,SHOW_FAVOURITE_TAB ,ADD_TO_SEARCH,ADD_FROM_SEARCH_TO_MOVIE}  from '../actions/index.js'


const initialMovieState = {
    list: [],
    favourites: [],
    showFavourite : false
}

export function movies(state = initialMovieState, action)
{
    // console.log('inside movies reducer');
    // console.log('inside movies reducer state', state);
    // console.log('inside movies reducer action',action);
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
        case SHOW_FAVOURITE_TAB: {
            return {
                ...state,
                showFavourite: action.value
            }
        }
        case ADD_FROM_SEARCH_TO_MOVIE: {
            return {
                ...state,
                list: [action.movie , ...state.list]
            }
        }
        default: {
            return state
        }
        }
    }

const initialSearchState = {
    result: {},
    showNavBar : false
 } 

// search reducer
export function search(state = initialSearchState, action)
{
    // console.log('inside search reducer');
    // console.log('inside search reducer state', state);
    // console.log('inside search reducer action',action);
    switch (action.type) {
        case ADD_TO_SEARCH: {
            return {
                ...state,
                result:  action.movie,
                showNavBar: true
            }
        }
        case ADD_FROM_SEARCH_TO_MOVIE: {
            return {
                ...state,
                showNavBar: false,
                result: {}
            }
        }
        default: return state;   
    }
    
}



// creating rootReducer
// const initialRootState = {
//     movies: initialMovieState,
//     search : initialSearchState
// }

// export default function rootReducer(state = initialRootState, action)
// {
//     // console.log('inside root reducer');
//     // console.log('inside root reducer state', state);
//     // console.log('inside root reducer action',action);

//     return {
//         movies: movies(state.movies,action),
//         search : search(state.search,action)
//     }
// }

// predefined method to combine reducers 
export default combineReducers({
    movies: movies,
    search: search
});