import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext'

function MovieCard({ movie }) {
    const {isFavorites, addToFavorites, removeFromFavorites} = useMovieContext();
    const favorite = isFavorites(movie.id);

    function favoriteBtnClicked(e) {
        e.preventDefault();
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

    return (
        <>
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-overlay">
                        <button className="favorite-btn" onClick={favoriteBtnClicked}><i className="material-icons" style={{color:`${favorite ? "red" : "white"}`, fontSize:"1.2rem"}}>favorite</i></button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date.split('-')[0]}</p>
                </div>

            </div>
        </>
    )
}

export default MovieCard