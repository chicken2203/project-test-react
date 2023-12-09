import React from 'react';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

function Navigations() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="nav">
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    San pham
                    <ExpandMoreIcon />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {/* <MenuItem onClick={handleClose}>San pham</MenuItem>
                    <MenuItem onClick={handleClose}>Them moi</MenuItem>
                    <MenuItem onClick={handleClose}>Sua thong tin</MenuItem> */}
                    <nav>
                        <MenuItem onClick={handleClose}>
                            <Link to="/product/home" activeClassName="active">
                                Home
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link to="/product/addnew" activeClassName="active">
                                Them moi
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link to="/product/update" activeClassName="active">
                                Thay doi
                            </Link>
                        </MenuItem>
                    </nav>
                </Menu>
            </div>
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    Khach hang
                    <ExpandMoreIcon />
                </Button>
            </div>
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    Cai dat
                    <ExpandMoreIcon />
                </Button>
            </div>
        </div>
    );
}

export default Navigations;
