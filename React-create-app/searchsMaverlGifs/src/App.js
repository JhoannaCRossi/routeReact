import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import {Route, Link} from 'wouter';

function App() {
  return (
    <div className="App">
      <section className="App-content">
      <h1>App Gifs Marvel</h1>
      <Link to='/gif/spiderman'>Gifs de Spiderman</Link>
      <Link to='/gif/hulk'>Gifs de Hulk</Link>
      <Link to='/gif/ironman'>Gifs de Ironman</Link>
      <Link to='/gif/thor'>Gifs de Thor</Link>
      <Link to='/gif/wanda'>Gifs de Wanda</Link>
      <Link to='/gif/wolwerine'>Gifs de Wolwerine</Link>
      <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
