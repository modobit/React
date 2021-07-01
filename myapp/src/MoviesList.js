import React, {useState} from 'react';
import Movie from './Movie';

const MovieList = () => {

    const [movies,setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            desc:'Aenean lacinia bibendum nulla sed consectetur.',
            id: 34768
        }, {
            name: 'Game of Thrones',
            price: '$130',
            desc:'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            id: 666445
        },
        {
            name: 'Star Wars',
            price: '$140',
            desc:'Sed posuere consectetur est at lobortis.',
            id: 34768
        }, {
            name: 'Inception',
            price: '$120',
            desc:'Maecenas faucibus mollis interdum.',
            id: 546563
        }

    ]);

    return (

        <div>
            <code>I am here from Movies JS side</code>
            
            <h1 className="display-1">Total: {movies.length}</h1>

            {movies.map(movie => (<Movie key={movie.id} name={movie.name} price={movie.price} desc={movie.desc}/>))}

        </div>
    );

};

export default MovieList;