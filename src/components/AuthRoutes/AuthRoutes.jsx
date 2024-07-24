import React from 'react'
import { Navigate } from 'react-router-dom'

function AuthRoutes({user, component}) {
    if(user) {
        return component
    } else {
       return <Navigate to="/" />;
    }
}

export default AuthRoutes