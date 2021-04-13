import ADD_MOVIE from '../actions'

export function movie(state = [], action)
{
    if (action.type === ADD_MOVIE)
    {
        return action.movies;
    }
    return state;
}