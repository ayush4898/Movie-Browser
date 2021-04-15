// action type
export  const ADD_MOVIE = 'ADD_MOVIE';
export const  ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SHOW_FAVOURITE_TAB = 'SHOW_FAVOURITE_TAB';
export const ADD_FROM_SEARCH_TO_MOVIE = 'ADD_FROM_SEARCH_TO_MOVIE';

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

export const ADD_TO_SEARCH = "ADD_TO_SEARCH"

function addToSearch(movie){
    console.log('inside add to seacrh result ', movie);
    return {
        type: ADD_TO_SEARCH,
        movie
    }
}

export function searchResult(movie)
{
    console.log('inside seacrh result ', movie);
    return function (dispatch) {
        fetch(`http://www.omdbapi.com/?apikey=416455a5&t=${movie}`)
        .then(res => res.json())
            .then((data) => {
                console.log(data)
                dispatch(addToSearch(data));
            });
    }
}


export function addFromSearch2Movie(movie)
{
    return {
        type: ADD_FROM_SEARCH_TO_MOVIE,
        movie
    }
}