import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Imageslist from './components/ImagesList';

function App() {

  const [ keyword, setKeyWord ] = useState('');
  const [ images, setImages ] = useState([]); 

  const getImagesFromAPI = async() => {
    if(keyword !== ''){
      const imagesPerPage = 30;
      const key = "14604796-072f733d726e080372ea0015c"
      const url = `https://pixabay.com/api/?key=${key}&q=${keyword}&per_page=${imagesPerPage }`;
      const res = await axios.get(url);
      setImages(res.data.hits);
    }
   
    
  }

  useEffect(() => {
    getImagesFromAPI();
  },[keyword]);

  return (
    <div className="app container">

      <div className="jumbotron">
        <p className="lead text-center">React Images Search</p>
        <Search setKeyWord={ setKeyWord }/>
      </div>

      <div className="row justify-content-center">
        <Imageslist images={ images }/>
      </div>
    </div>
  );
}

export default App;
