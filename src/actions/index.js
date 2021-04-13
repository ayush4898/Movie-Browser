// action type
export  const ADD_MOVIE = 'ADD_MOVIE';


export const  ADD_FAVOURITE = 'ADD_FAVOURITE';

// action creator

export function addMovie(movies) {
    // console.log('store dispatch called')
    return ({
        type: ADD_MOVIE,
        movies
    });
}
export function addFavourite(movie) {
    // console.log('store dispatch called')
    return ({
        type: ADD_FAVOURITE,
        movie : movie
    });
}