import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

function App() {
  return (
    <div className="App">
      <section className="App-content">
      {/*{
        gifs.map(singleGif => 
          <Gif 
            key={singleGif.id}
            title={singleGif.title} 
            url={singleGif.url}
            id={singleGif.id}  
          />
        )
      }*/
      /*puedo reducir codigo para no enviar el objeto completo
          gifs.map(({id, title, url}) => 
            <Gif 
              id={id}  
              key={id}
              title={title} 
              url={url}
            />
        )*/
      /*O lo convierto en un componente la lista de gifs*/  
      }
      <ListOfGifs keyword="sabrina" />
      </section>
    </div>
  );
}

export default App;
