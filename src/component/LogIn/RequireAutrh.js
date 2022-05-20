import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
// import Button from '../Button';
import Loading from '../Share/Loading';

const RequireAutrh = ({children}) => {
    const [user, loading] = useAuthState(auth)

    const location = useLocation()
    if(loading){
        <Loading></Loading>
    }

    if(!user){
        return <Navigate to={'/log-in'} state={{from: location}} place></Navigate>
    }

    return children;
};

export default RequireAutrh;