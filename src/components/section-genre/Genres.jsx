


import './Genres.css'
import theater from "../../assets/theater.svg"
import ghost from "../../assets/ghost.svg"
import music from "../../assets/music.svg"
import film from '../../api/film'
import { useEffect, useState } from 'react'
import { Flex, Spin } from 'antd'

const images = [theater,ghost,music]

const Genres = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchMoviesGenre = async () => {
            const { genres } = await film.fethMovieGenres()
            console.log(genres);
            setData(genres)
        }
        fetchMoviesGenre()

    }, [])

    if (data === null) {
        return <Flex style={{ marginTop: '100px', marginLeft: '100px' }}
            align='center' >
            <Spin size='large' />
        </Flex>
    }
    return (
        <div className='container genres'>
            <h3 className="section-title">
                Смотрите фильмы, которые вам нравятся
            </h3>
            <p className="section-p">
                На нашем сайте собрано огромное количество фильмов и сериалов на любой вкус
            </p>
            <div className='genres-cards'>
                {data.map((el, index) => {
                    return <div key={index} className='g-card'>
                        <div>
                            <h3>{el.name}</h3>
                            <p>{Math.floor(Math.random() * 120)}
                            k+ фильмов
                            </p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Genres