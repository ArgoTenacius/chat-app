import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import { Auth } from './components/index';
import routes from './constants/routes.json'

const RouteSwitch = ({user}) => {

    const navigate = useNavigate();

    useEffect(() => {
        user === null ? navigate(routes.AUTH) : console.log('MAIN')
    }, [])

    return (
        <Routes>
            <Route path={routes.AUTH} element={<Auth />} />
        </Routes>
    )
}

export default RouteSwitch