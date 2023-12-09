import { CircularProgress } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUser } from '~/redux/loginSlice';
import { getFromLocalStorage } from '~/services/LocalstorageServies';

const withAuth = (Component) => {
    return function AuthenticatedComponent(props) {
        const dispatch = useDispatch();
        const token = getFromLocalStorage('access_token');
        const isAuthenticated = useSelector((state) => state.login?.user?.id);
        const isLoading = useSelector((state) => state.login?.loading);
        if (token && !isAuthenticated) {
            dispatch(getUser());
        }

        if (!isLoading) {
            if (isAuthenticated) {
                return <Component {...props} />;
            } else {
                return <Navigate to="/" replace />;
            }
        } else return <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%' }} />;
    };
};

export default withAuth;
