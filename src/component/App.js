import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './moviecard';
import React from 'react';
import { addMovie } from '../actions/index'



class App extends React.Component {

  componentDidMount()
  {
    const { store } = this.props;
    // console.log('Compound did mount');

    // use subscribe above dispatch
    store.subscribe(() => { this.forceUpdate(); });

      store.dispatch(addMovie(data));
    // console.log('UPDATED', store.getState());

  }


  render() {
    // console.log('render');
    const {list} = this.props.store.getState();
    console.log(this.props.store.getState());
    return (<div className="App">
    <Navbar />
    <div className="main">
        <div className="tabs">
          <div className='tab'>Movies</div>
          <div className='tab'>Favourites</div>
        </div>
        <div className="list">
          { list.map( (movie,index) => (
            <MovieCard movie={movie} key={`movie-${index}`} dispatch= {this.props.store.dispatch}  />
          ))
          }
        </div>
      </div>
  </div>
      
  )
 }
}

export default App;
