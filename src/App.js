import React, { useState, useEffect } from 'react';
import Search from './components/Search';

function App() {

  const [ keyword, setKeyWord ] = useState('');

  const getImagesFromAPI = async() => {
    const url = "";
    const res = await axios.get(url);
  }

  useEffect(() => {

  });

  return (
    <div className="app container">

      <div className="jumbotron">
        <p className="lead text-center">React Images Search</p>
      </div>

      <div className="row justify-content-center">
        <Search setKeyWord={ setKeyWord }/>
      </div>
    </div>
  );
}

export default App;
