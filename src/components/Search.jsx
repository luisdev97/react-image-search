import React, { useState } from 'react';

const Search = () => {

    const [ keywordSearch , setKeyWordSearch ] = useState('');
    const [ error, setError ] = useState(false);

    const handleSubmit = e => {
         
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text" 
                           placeholder="Search images" 
                           className="form-control form-control-lg"
                           onChange={ () => {} }/>
                </div>

                <div className="form-group col-md-4">
                    <input type="text" className="btn btn-lg btn-danger btn-block" value="Search"/>
                </div>
            </div>
        </form>
        
    );
};

export default Search;