"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Series() {
  const [series, setSeries] = useState([])
  const [selectedSerie, setSelectedSerie] = useState(false)
  const handleCardClick = (serie) => {
    setSelectedSerie(serie);
  };

  const handleCloseModal = () => {
    setSelectedSerie(false);
  };



  useEffect(() => {
    axios.get('/prueba-tecnica-react-developer-main/data/sample.json')
      .then((response) => {
        setSeries(response.data.entries)

      })
      .catch((error) => {
        setError(error.message)

      })
  }, [])
  const sortedSeries = series.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 40);
console.log(sortedSeries)
  return (
    <div>
      <main className='w-full min-h-[calc(70vh)] flex flex-wrap gap-14 mt-6 justify-center mb-5'>
        {sortedSeries.map((serie, index) =>
          serie.programType === "series" && serie.releaseYear >= 2010
          &&
          <div key={index}
            className='w-36 h-60 cursor-pointer'
            onClick={() => handleCardClick(serie)}>
            <figure className='w-full h-5/6 bg-slate-200 hover:border-4 '>
              <Image
                src={serie.images["Poster Art"].url}
                width={serie.images["Poster Art"].width}
                height={serie.images["Poster Art"].height}
                alt={serie.title}
                className='w-full h-full'
              />
            </figure>
            <h2>{serie.title}</h2>
          </div>
        )
        }
      </main>
      {selectedSerie && (
        <div className="fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">{selectedSerie.title}</h2>
            <p className='font-semibold'>Year: <span className='font-normal'>{selectedSerie.releaseYear}</span></p>
            <p className='font-semibold'>Description: <span className='font-normal'>{selectedSerie.description}</span> </p>
           <figure className='w-40 h-52 mx-auto'>
           <Image
              src={selectedSerie.images["Poster Art"].url}
              width={selectedSerie.images["Poster Art"].width}
              height={selectedSerie.images["Poster Art"].height}
              alt={selectedSerie.title}
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