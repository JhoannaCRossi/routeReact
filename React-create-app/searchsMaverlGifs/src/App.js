import React from 'react';
import './App.css';
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import {Route, Link} from 'wouter';
import logo from './logo2.png'

function App() {
  return (
    <div className="App">
      <section className="App-content">
      <h1>App Gifs Marvel</h1>
      <Link to='/'>
        <img className="App-logo" alt="Gifs Logo" src={logo}  />
      </Link>
      
      <Route path="/" component={Home} />
      <Route path="/search/:keyword" component={SearchResults} />
      </section>
    </div>
  );
}

export default App;
