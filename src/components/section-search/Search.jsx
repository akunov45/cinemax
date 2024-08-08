


import React from 'react'
import { Input } from 'antd'
import './Search.css'

const { Search: AntSearch } = Input

const Search = () => {
    return (
        <div className='container'>
            <h3 className='section-title'>Поиск по сайту</h3>
            <p className='section-p'>
                На нашем сайте вы найдете подходящие вам фильмы и сериалы
            </p>
            <div>
                <AntSearch allowClear onSearch={() => { }} />
            </div>
        </div>
    )
}

export default Search