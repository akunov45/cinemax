
import React from 'react';
import { Carousel, Spin, Flex } from 'antd';
import { FaPlayCircle } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
// local imports
import './Hero.css'
import Button from '../UI/button/Button';
import film from '../../api/film';
import { MOVIE_CONTEXT } from '../../context/AppContext';

import { Link } from "react-router-dom"

const contentStyle = {
    margin: 0,
    width: 507,
    minHeight: '620px',
    color: '#fff',
    textAlign: 'left',
    background: 'trasparent'
};

const Hero = () => {
    const [data, setData] = useState(null)
    const { setBgImg } = useContext(MOVIE_CONTEXT)

    useEffect(() => {

        const fetchMovies = async () => {
            const { results } = await film.fethPopularMovie()
            console.log(results);
            setData(results.slice(0, 5))
            setBgImg(results[0].backdrop_path)
        }
        fetchMovies()

    }, [])

    if (data === null) {
        return <Flex style={{ marginTop: '100px', marginLeft: '100px' }}
            align='center' >
            <Spin size='large' />
        </Flex>
    }

    return (
        <>
            <Carousel
                afterChange={(index) => {
                    setBgImg(data[index].backdrop_path)
                }}
                arrows infinite={true} autoplay={true}>
                {data.map((el) => {
                    return (
                        <div key={el.id}>
                            <div className='movie-banner container' style={contentStyle}>
                                <p className='movie-title'>Выбор Illuminous</p>
                                <h2 className='movie-name'>
                                    {el.title}
                                </h2>
                                <p className='movie-desc'>
                                    {el.overview}
                                </p>
                                <Link to={`/film/${el.id}`}>
                                    <Button
                                        btnText={"Смотреть"}
                                        icon={<FaPlayCircle />} />
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </>
    );
}
export default Hero;



// fetch vs axios (API)
// react hooks (useState, useEffect, useRef,....)
// react context-- useContext and Provider vs Consumer