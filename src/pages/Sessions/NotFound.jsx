import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h3>Not Found 404</h3>
            <Link to={'/'}>
                <Button color="primary" variant="contained">
                    {'Quay lai'}
                </Button>
            </Link>
        </div>
    );
}

export default NotFound;
