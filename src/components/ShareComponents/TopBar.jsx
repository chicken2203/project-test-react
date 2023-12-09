import React, { useState } from 'react';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { removeItemFromLocalStorate } from '~/services/LocalstorageServies';
import { connect, useDispatch } from 'react-redux';
import { signOut } from '~/redux/loginSlice';
import { useNavigate } from 'react-router-dom';

function TopBar(props) {
    const { user } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        removeItemFromLocalStorate('access_token');
        removeItemFromLocalStorate('refresh_token');
        removeItemFromLocalStorate('user');
        dispatch(signOut());
        navigate('/');
    };
    return (
        <div className="top-bar">
            <div>icon bar</div>
            {user?.id && (
                <div className="flex flex-middle">
                    <Avatar alt={user?.name} src={user?.avatar} />
                    <Button
                        className="ml-8"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <span>{user?.name}</span>
                        <ExpandMoreIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={() => {
                            setAnchorEl(null);
                        }}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Dang xuat</MenuItem>
                    </Menu>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.login.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
