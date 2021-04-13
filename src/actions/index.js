// action type
const  ADD_MOVIE = 'ADD_MOVIE'
export default ADD_MOVIE;

// action creator

export function addMovie(movies) {
    // console.log('store dispatch called')
    return ({
        type: ADD_MOVIE,
        movies
    });
}