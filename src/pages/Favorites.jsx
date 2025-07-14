import '../css/Favorites.css'
import '../css/Home.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Favorites() {

    const { favorites } = useMovieContext();

    if (favorites) {
        return <div className='favorites'>
            <h2>Your Favorites</h2>
            <div className="movies-grid-favorites">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    }


    return (
        <div className="favorites-empty">
            <p>No favorites yet</p>
            <p>Start adding your favorite movies that will appear here</p>
        </div>
    )
}

export default Favorites