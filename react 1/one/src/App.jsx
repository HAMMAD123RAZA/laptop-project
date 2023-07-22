import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  const API = "http://www.omdbapi.com/?apikey=2afa2191";

  const movie = async (title) => {
    const res = await fetch(`${API}&s=${title}`);
    const data = await res.json();
        
    console.log(data.Search);
  }

  useEffect(() => {
    movie('dark');
  }, []);

  return (
    <>
    <div className='app'>
      <h1>
    MoviesSummer
    </h1>
    </div>
    
      
    </>
  );
}

export default App;
