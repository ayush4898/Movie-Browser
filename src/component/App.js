import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './moviecard';
import React from 'react';

import { addMovie } from '../actions/index'



class App extends React.Component {

  componentDidMount()
  {
    // console.log('Compound did mount');
    const { store } = this.props;
     store.dispatch(addMovie(data));
    // console.log('UPDATED', store.getState());
    store.subscribe(this.render);
  }


  render() {
    // console.log('render');
    return (<div className="App">
    <Navbar />
    <div className="main">
        <div className="tabs">
          <div className='tab'>Movies</div>
          <div className='tab'>Favourites</div>
        </div>
        <div className="list">
          { data.map( (movie,index) => (
            <MovieCard movie={movie} key={`movie-${index}`} />
          ))
          }
        </div>
      </div>
  </div>
      
  )
 }
}

export default App;
