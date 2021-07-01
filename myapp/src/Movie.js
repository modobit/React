import React from 'react';

const Movie = (props) => {
    return (
        <div>
            
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <h1>{props.name}</h1>
                    </div>
                    <div class="col-sm">
                        <h3>Price: {props.price}</h3>
                    </div>
                    <div class="col-sm">
                        <p>{props.desc}</p>
                    </div>
                    <hr></hr>
                </div>
            </div>

        </div>
    );
};

export default Movie;