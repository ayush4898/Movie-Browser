import { data } from '../data';
import React from 'react';

import { addMovie, showFavourite } from '../actions/index'
import Navbar from './Navbar';
import MovieCard from './moviecard';
import {StoreContext} from '../index'


/* store
 movies :{
 list: [],
 favourites : [],
 showFavrites: bool
 }

 search:{
 searchResult : []
 }
}
*/
class App extends React.Component {

  changeCurrentWindow = (value) => {
    this.props.store.dispatch(showFavourite(value));
  }
  
  componentDidMount()
  {
    const { store } = this.props;
    // console.log('Compound did mount');

    // use subscribe above dispatch
    store.subscribe(() => { this.forceUpdate(); });

      store.dispatch(addMovie(data));
    // console.log('UPDATED', store.getState());

  }

  // to display the type of button  
  isFavourite = (movie) => {
    const {movies} = this.props.store.getState(); 
    const { favourites } = movies;
    console.log('is fav:', favourites);
    if (favourites && favourites.indexOf(movie) !== -1)
    {
      return true;
    }
    return false;
  }

  render() {
     // console.log('render');
   
    const { movies ,search} = this.props.store.getState();
    const {list , favourites ,showFavourite} = movies;  // {movie:{} search:{}}
    console.log('RENDER',this.props.store.getState());
    const displayWindow = showFavourite ? favourites : list;
   
    return (
      
      <div className="App">
      <Navbar dispatch={this.props.store.dispatch} search={search}/>
    <div className="main">
        <div className="tabs">
          <div className={`tab ${showFavourite ? null : 'active-tabs'}`}
            onClick={() => { this.changeCurrentWindow(false) }}>Movies</div>
          <div className={`tab ${showFavourite ? 'active-tabs' : null}`}
            onClick={() => { this.changeCurrentWindow(true) }}>Favourites</div>
        </div>
        
        <div className="list">
          { displayWindow.length === 0 ? <div className="no-movies">No Movie to display</div> : null}
           { displayWindow.map( (movie,index) => (
            <MovieCard movie={movie}
              key={`movie-${index}`}
              dispatch={this.props.store.dispatch}
              isFavourite = {this.isFavourite(movie)}
            />
           ))
          }
          
        </div>
      </div>
  </div>
      
  )
 }
}

class AppWrapper extends React.Component {
  render() {
    return <StoreContext.Consumer>
        {
        (store) => <App store={store} /> 
        }
      </StoreContext.Consumer>
    
  }
}

export default AppWrapper;
