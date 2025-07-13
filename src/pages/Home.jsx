import '../css/Home.css'
import MovieCard from '../components/MovieCard'
import { useState } from 'react';

function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "John wick chapter-1", release_date: '2020' },
        { id: 2, title: "Terminator", release_date: '2022' },
        { id: 3, title: "Avengers", release_date: '2024' },
        { id: 4, title: 'Hulk', release_date: '2026' }
    ];

    const handleSearch = () => {
        e.preventDefault();
       setSearchQuery("")
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
            <p>Hello</p>
        </div>
    )
}

export default Home;