import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { movieJson } from '../assets/movies';

const MoviesCatalog = () => {
  const [movieData, setMovieData] = useState(movieJson);
  const [pagination, setPagination] = useState(0);
  const [searchFilteredData, setSearchFilteredData] = useState(movieJson);
  const [genre, setGenre] = useState('All Geners');
  const [releaseYear, setReleaseYear] = useState('All release Year');
  const [imdbRating, setImdbRating] = useState('All imdbRating');

  const itemsPerPage = 8;

  // SEARCH FILTERS -----------------
  const getAllGenre = Array.from(
    new Set(movieData.flatMap((value) => value.genres)),
  );
  const allGenresValue = ['All Geners', ...getAllGenre];

  const getAllReleaseYear = Array.from(
    new Set(movieData.map((value) => value.release_year)),
  );

  const allReleaseYearValue = ['All release Year', ...getAllReleaseYear];

  const getAllImdbRating = Array.from(
    new Set(movieData.map((value) => value.imdb_rating)),
  );

  const allImdbValue = ['All imdbRating', ...getAllImdbRating];
  // ---------------------------------

  const nextPage = () => {
    const newPagination = pagination + itemsPerPage;
    if (newPagination < searchFilteredData.length) {
      setPagination(newPagination);
    }
  };

  const previousPage = () => {
    const newPagination = Math.max(0, pagination - itemsPerPage);
    setPagination(newPagination);
  };

  const searchFilterHandler = (event) => {
    const filter = event.target.value.toLowerCase();
    const filteredData = movieData.filter(({ title }) =>
      title.toLowerCase().includes(filter),
    );
    setSearchFilteredData(filteredData);
    setPagination(0);
  };

  useEffect(() => {
    let filteredData = movieData;

    if (genre !== 'All Geners') {
      filteredData = filteredData.filter((movie) =>
        movie.genres.includes(genre),
      );
    }

    if (releaseYear !== 'All release Year') {
      filteredData = filteredData.filter(
        (movie) => movie.release_year === parseInt(releaseYear, 10),
      );
    }

    if (imdbRating !== 'All imdbRating') {
      filteredData = filteredData.filter(
        (movie) => movie.imdb_rating === parseFloat(imdbRating),
      );
    }

    setSearchFilteredData(filteredData);
    setPagination(0);
  }, [genre, releaseYear, imdbRating, movieData]);

  const genreFilterHandler = (event) => {
    setGenre(event.target.value);
  };

  const releaseYearFilterHandler = (event) => {
    setReleaseYear(event.target.value);
  };

  const imdbFilterHandler = (event) => {
    setImdbRating(event.target.value);
  };

  const getPaginatedData = () => {
    return searchFilteredData.slice(pagination, pagination + itemsPerPage);
  };

  return (
    <main>
      {/* -------------- Filteration Navbar ---------------- */}
      <div className="bg-white flex flex-col justify-center items-center gap-10 border-b shadow-2xl p-2 md:flex-row md:justify-center md:items-center">
        {/* BY SEARCH INPUT */}

        <div className="w-[40%] flex justify-between gap-6">
          <input
            onChange={searchFilterHandler}
            type="text"
            className="border p-2 rounded border-blue-600 w-full"
            placeholder="Search your favourite movies"
          />
        </div>

        {/* BY GENRE  */}
        <section className="flex  text-center border p-2 border-black rounded  md:gap-4">
          <select
            name="genre"
            id="genre"
            onChange={genreFilterHandler}
            className="text-center border border-blue-800 outline-none"
          >
            {allGenresValue.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </section>

        {/* BY RELEASE YEAR */}
        <section className="flex flex-col text-center border p-2 border-black rounded md:gap-4">
          <select
            name="RYear"
            id="RYear"
            onChange={releaseYearFilterHandler}
            className="text-center border border-blue-800 outline-none"
          >
            {allReleaseYearValue.map((releaseYear, index) => (
              <option key={index} value={releaseYear}>
                {releaseYear}
              </option>
            ))}
          </select>
        </section>

        {/* BY IMDB RATING */}
        <section className="flex flex-col text-center border p-2 border-black rounded  md:gap-4">
          <select
            name="imdbRating"
            id="imdbRating"
            onChange={imdbFilterHandler}
            className="text-center border border-blue-800 outline-none"
          >
            {allImdbValue.map((imdbValue, index) => (
              <option key={index} value={imdbValue}>
                {imdbValue}
              </option>
            ))}
          </select>
        </section>
      </div>

      {/* ---------------------------------------- */}

      <div className="flex justify-center items-center flex-col bg-black">
        <section className="bg-white  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 shadow-lg w-[95%] rounded m-4">
          {searchFilteredData.length === 0 ? (
            <p>Data Not Found</p>
          ) : (
            <>
              {getPaginatedData().map(
                (
                  {
                    title,
                    movie_url,
                    genres,
                    imdb_rating,
                    poster,
                    release_year,
                  },
                  index,
                ) => (
                  <Card style={{ width: '17rem' }} key={index}>
                    <Card.Img
                      variant="top"
                      src={poster}
                      style={{ height: '15rem', padding: '4px' }}
                    />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <p>
                        <span className="font-bold">Genre :</span>
                        {Array.isArray(genres) ? genres.join(', ') : genres}
                      </p>
                      <p>
                        <span className="font-bold">IMDB Rating :</span>{' '}
                        {imdb_rating}
                      </p>
                      <p className="mb-2">
                        <span className="font-bold">Release Year :</span>{' '}
                        {release_year}
                      </p>
                      <a
                        target="_blank"
                        href={movie_url}
                        className="bg-black text-white px-2 py-1 rounded"
                      >
                        Watch Here
                      </a>
                    </Card.Body>
                  </Card>
                ),
              )}
            </>
          )}
        </section>
        <div className="flex justify-center p-4">
          <button
            onClick={previousPage}
            disabled={pagination === 0}
            className=" bg-white p-2 m-2"
          >
            PREV
          </button>
          <button
            onClick={nextPage}
            disabled={pagination + itemsPerPage >= searchFilteredData.length}
            className="bg-white p-2 m-2"
          >
            NEXT
          </button>
        </div>
      </div>
    </main>
  );
};

export default MoviesCatalog;
