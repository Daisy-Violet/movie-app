import './Movie.css'

function Movie(props) {
    return (
        <div className='movie-card'>
            <img src={props.poster} />
            <h1 className='movie-name'>{props.name}</h1>
            <h2 className='movie-director'>{props.director}</h2>
            <h3 className='movie-year'>{props.year}</h3>
            <div className='movie-genre'>{props.genre}</div>
            <div className='movie-starring'>{props.starring}</div>
            <div className='movie-plot'>{props.plot}</div>
        </div>
    )
}

export default Movie;