"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(false)
  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

 
  const handleCloseModal = () => {
    setSelectedMovie(false);
  };



  useEffect(() => {
    axios.get('/prueba-tecnica-react-developer-main/data/sample.json')
      .then((response) => {
        setMovies(response.data.entries)

      })
      .catch((error) => {
        setError(error.message)

      })
  }, [])
  const sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 77);

  return (
    <div>
      <main className='w-full min-h-[calc(70vh)] flex flex-wrap gap-14 mt-6 justify-center mb-5'>
        {sortedMovies.map((movie, index) =>
          movie.programType === "movie" && movie.releaseYear >= 2010
          &&
          <div key={index}
            className='w-36 h-60 cursor-pointer'
            onClick={() => handleCardClick(movie)}>
            <figure className='w-full h-5/6 bg-slate-200 hover:border-4 '>
              <Image
                src={movie.images["Poster Art"].url}
                width={movie.images["Poster Art"].width}
                height={movie.images["Poster Art"].height}
                alt={movie.title}
                className='w-full h-full'
              />
            </figure>
            <h2>{movie.title}</h2>
          </div>
        )
        }
      </main>
      {selectedMovie && (
        <div className="fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">{selectedMovie.title}</h2>
            <p className='font-semibold'>Year: <span className='font-normal'>{selectedMovie.releaseYear}</span></p>
            <p className='font-semibold'>Description: <span className='font-normal'>{selectedMovie.description}</span> </p>
           <figure className='w-40 h-52 mx-auto'>
           <Image
              src={selectedMovie.images["Poster Art"].url}
              width={selectedMovie.images["Poster Art"].width}
              height={selectedMovie.images["Poster Art"].height}
              alt={selectedMovie.title}
              className='w-full h-full mt-4'
            />

           </figure>
            
            <button
              className="mt-4 bg-red-500 text-white p-2 rounded"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  )
}