import  ADD_MOVIE  from '../actions/index.js'

const initialState = {
    list: [],
    favourites : []
}

export function movie(state = initialState, action)
{
    if (action.type === ADD_MOVIE)
    {
        return {
            ...state,
            list: action.movies
        }
    }
    return state;
}