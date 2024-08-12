

import React, { useContext } from 'react'
import { MOVIE_CONTEXT } from '../context/AppContext'
import { img_url } from '../constants'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Search from '../components/section-search/Search'
import Genres from '../components/section-genre/Genres'

const HomePage = () => {
    const { img } = useContext(MOVIE_CONTEXT)
    return (
        <>
            <div id="banner" style={{
                backgroundImage: `url(${img_url + img})`,
                backgroundPosition: 'center top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                transition:'background-image 0.7s ease-in-out'
            }} >
                <div className="container">
                    <Hero />
                </div>
            </div>

            <Search />
            <Genres />
        </>
    )
}

export default HomePage