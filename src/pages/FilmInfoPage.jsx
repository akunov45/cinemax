
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import film from '../api/film'


const FilmInfoPage = () => {
  const { id } = useParams()

  useEffect(() => {
    const getDetail = async () => { 
      const data = await film.fetchMovieDetail(id);
      console.log(data,'----info----');
    }

    getDetail();

  }, [])

  return (
    <div style={{}}>
      FilmInfoPage
    </div>

  )
}

export default FilmInfoPage
