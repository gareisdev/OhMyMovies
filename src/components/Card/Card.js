import React from "react";

/**
 * props es solo un nombre.. es un objeto que contiene
 * las propiedades del componente
 * En nuestro caso se va a llamar solo movie
 */
const Card = ({ movie }) => {
    return (
        <div className="col-md-4 col-lg-3 my-2">
            <div className="card">
                <img src={movie.Poster} alt={movie.Title} className='card-img-top' width='100'></img>
                <div className="card-body">
                    <h4>
                        {movie.Title} ({movie.Year})
                    </h4>
                    <p>{movie.Type.toUpperCase()}</p>
                </div>
            </div>
        </div>
    );
};


export default Card;
