import React, {useState} from 'react'

import FormInput from './components/FormInput'

import './style.css'
import GetImags from './components/GetImags';

const Movie = () => {

    //we created array of movies with one name of movie
    const [namesMovies, setNamesMovies] = useState(['park']);

    //we update array with the new value
    const handleAddMovie = (newMovie)=> {
        if(namesMovies.includes(newMovie)) return;
        setNamesMovies([...namesMovies, newMovie])
    }

    return (
        <>
             <h2>Movie</h2>

            {/* input */}
            <FormInput handleAddMovie= {handleAddMovie}/>

            {/* title */}            
            {
                namesMovies.map(imgs =>{
                    return <GetImags key={imgs} imgs={imgs}/>
                })
            }
        </>
    

    //
    )
}

export default Movie;