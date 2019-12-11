import React, { useState } from 'react';
import Error from './Error';

const Search = () => {

    const [ keywordSearch , setKeyWordSearch ] = useState('');
    const [ error, setError ] = useState(false);

    const handleSubmit = e => {
         e.preventDefault();

         if(keywordSearch === ""){
             setError(true);
         }else{
            setError(false);
         }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text" 
                           placeholder="Search images" 
                           className="form-control form-control-lg"
                           onChange={ e => { setKeyWordSearch(e.target.value) } }/>
                </div>

                <div className="form-group col-md-4">
                    <input type="submit" className="btn btn-lg btn-danger btn-block" value="Search"/>
                </div>
            </div>
            { error ? <Error messagge="Enter a keyword to search"/> : null }
        </form>
        
    );
};

export default Search;