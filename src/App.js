import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Imageslist from './components/ImagesList';

function App() {

  const [ keyword, setKeyWord ] = useState('');
  const [ images, setImages ] = useState([]); 
  const [ actualPage, setActualPage ] = useState(1);
  const [ numPages, setNumPages ] = useState(0)

 
  const getImagesFromAPI = async() => {

    if(keyword !== ''){
      
      const imagesPerPage = 30;
      const key = "14604796-072f733d726e080372ea0015c"
      const url = `https://pixabay.com/api/?key=${key}&q=${keyword}&per_page=${imagesPerPage}&page=${actualPage}`;
      const res = await axios.get(url);

      setImages(res.data.hits);

      const totalPages = Math.ceil(res.data.totalHits / imagesPerPage);
      setNumPages(totalPages);

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth', block: 'end' });

    }
   
    
  }

  useEffect(() => {
    getImagesFromAPI();
  },[keyword, actualPage]);

  return (
    <div className="app container">

      <div className="jumbotron">
        <p className="lead text-center">React Images Search</p>
        <Search setKeyWord={ setKeyWord }/>
      </div>

      <div className="row justify-content-center">
        <Imageslist images={ images }/>

        { actualPage === 1 ? null : 
          <button onClick={ () => { setActualPage(actualPage - 1 )} } className="btn btn-info mr-1">Prev &laquo;</button>
        }

        { actualPage === numPages ? null :
          <button onClick={ () => { setActualPage(actualPage + 1 )} } className="btn btn-info mr-1">Next &raquo;</button>
        }
        
        
      </div>
    </div>
  );
}

export default App;
