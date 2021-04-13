import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './moviecard';
import React from 'react';
import { addMovie ,showFavourite } from '../actions/index'



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
  isFavourite = (movie) =>{
    const { favourites } = this.props.store.getState(); 
    console.log('is fav:', favourites);
    if (favourites && favourites.indexOf(movie) !== -1)
    {
      return true;
    }
    return false;
  }

  render() {
    // console.log('render');
    const {list , favourites ,showFavourite} = this.props.store.getState();
    console.log(this.props.store.getState());
    const displayWindow = showFavourite ? favourites : list;
    return (<div className="App">
    <Navbar />
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

export default App;
