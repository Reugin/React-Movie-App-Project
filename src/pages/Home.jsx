import '../css/Home.css'
import MovieCard from '../components/MovieCard'
import { searchMovies, getPopularMovies } from '../services/api';
import { useState, useEffect } from 'react';

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...")
            } finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)

        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);

        } catch (err) {
            console.log("Failed to search movie...");
        } finally {
            setLoading(false)
        }
    }
    return (

        <div className="home">
            <form onSubmit={handleSearch} className='search-form'>
                <input
                    type="text"
                    placeholder='Search for movie...'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                ></input>
                <button type='submit' className='search-button'>Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) &&
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home;