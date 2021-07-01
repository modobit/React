import './App.css';

import React, {useState} from 'react';
import MovieList from './MoviesList';

function App() {

    // first valeue, next function to change the state value
    const [count,setCount] = useState(4)
    const [theme,setTheme] = useState('Click on the button to change')

    function decCount() {
        setCount(count - 1)
        setTheme('Removed')
    }

    function inCount() {
        setCount(count + 1)
        setTheme('Add')
    }

    return (
        <div className="App">

          <MovieList />

            <button onClick={decCount} className="btn btn-primary">-</button>
            <span> {count} </span>
            <button onClick={inCount} className="btn btn-primary">+</button>
        <br></br>
            <span>{theme}</span>

        </div>
    );
}

export default App;
