

import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import FilmInfoPage from '../pages/FilmInfoPage';


const routes = [
    {
        path: '/',
        component: <HomePage />
    },
    {
        path: '/film/:id',
        component: <FilmInfoPage />
    }
]

const AppRoutes = () => {
    return (
        <Routes>
            {routes.map(({ path, component }) => {
                return <Route key={path} path={path} element={component} />
            })}
        </Routes>
    )
}

export default AppRoutes