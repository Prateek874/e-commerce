import React from 'react'
import { useNavigate,Outlet, Navigate } from 'react-router-dom'

function PrivateComponent() {
    const auth = localStorage.getItem('user')
    return auth?<Outlet />:<Navigate to ="/" />
}

export default PrivateComponent;
