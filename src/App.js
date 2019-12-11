import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="app container">

      <div className="jumbotron">
        <p className="lead text-center">React Images Search</p>
      </div>

      <div className="row justify-content-center">
        <Search/>
      </div>
    </div>
  );
}

export default App;
