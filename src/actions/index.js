// action type
export  const ADD_MOVIE = 'ADD_MOVIE';
export const  ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const  SHOW_FAVOURITE_TAB = 'SHOW_FAVOURITE_TAB';

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


export function removeFavourite(movie) {
    // console.log('store dispatch called')
    return ({
        type: REMOVE_FAVOURITE,
        movie : movie
    });
}


export function showFavourite(value) {
    // console.log('store dispatch called')
    return ({
        type: SHOW_FAVOURITE_TAB,
        value
    });
}