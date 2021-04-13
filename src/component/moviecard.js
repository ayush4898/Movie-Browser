import React from 'react';
import { addFavourite , removeFavourite}  from '../actions/index';


class MovieCard extends React.Component {
    
    addhandlerFav = () => {
        const { movie } = this.props;
        this.props.dispatch(addFavourite(movie));   
    }
    removehandlerFav = () => {
        const { movie } = this.props;
        this.props.dispatch(removeFavourite(movie));   
    }
    


    render() {
        const { movie } = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {this.props.isFavourite
                            ?
                        <button className="unfavourite-btn" onClick={this.removehandlerFav}>UnFavourite</button>
                            :
                        <button className="favourite-btn" onClick={this.addhandlerFav}>Favourite</button>        
                        }
                    </div>
                </div>

               
            </div>
        )
    }


}

export default MovieCard;