import React,{useContext} from 'react'
import { Authcontext } from '../context/AuthContextProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {
        authState: {isAuth},
    } = useContext(Authcontext);
    console.log("isAuth:", isAuth)
    return isAuth ? children :<Navigate to="/login"/>
}

export default PrivateRoute;