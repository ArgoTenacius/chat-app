import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import { Auth, Main } from './components/index';
import routes from './constants/routes.json'

const RouteSwitch = ({user}) => {

    const navigate = useNavigate();

    useEffect(() => {
        user === null ? navigate(routes.AUTH) : navigate(routes.MAIN)
    }, [])

    return (
        <Routes>
            <Route path={routes.AUTH} element={<Auth navigate={navigate} routes={routes}/>} />
            <Route path={routes.MAIN} element={<Main user={user}/>} />
        </Routes>
    )
}

export default RouteSwitch