import React, { useState } from 'react';
import { Button, Card, Grid, Icon, IconButton, InputAdornment } from '@mui/material';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { useDispatch } from 'react-redux';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { getUser } from '~/redux/loginSlice';
import axios from 'axios';
import { upToLocalStorage } from '~/services/LocalstorageServies';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [info, setInfo] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://api.escuelajs.co/api/v1/auth/login', info);
            upToLocalStorage('access_token', res?.data?.access_token);
            upToLocalStorage('refresh_token', res?.data?.refresh_token);
            dispatch(getUser());
            navigate('/product/home');
        } catch {
            alert('sai ten dang nhap hoac mat khau');
        }
    };
    return (
        <div className="signin">
            <Card className="signin-card p-24">
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <ValidatorForm onSubmit={handleFormSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    className="mb-12 w-100"
                                    variant="outlined"
                                    label={
                                        <span className="font">
                                            <span style={{ color: 'red' }}> * </span>
                                            {'Số điện thoại đăng nhập'}
                                        </span>
                                    }
                                    onChange={handleChange}
                                    type="text"
                                    name="email"
                                    value={info.email.trim()}
                                    validators={['required']}
                                    errorMessages={['Không được để trống']}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextValidator
                                    className="mb-12 w-100"
                                    label={
                                        <span className="font">
                                            <span style={{ color: 'red' }}> * </span>
                                            {'Mật khẩu'}
                                        </span>
                                    }
                                    variant="outlined"
                                    onChange={handleChange}
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={info.password.trim()}
                                    validators={['required']}
                                    errorMessages={['Không được để trống']}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    size="medium"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {!showPassword ? (
                                                        <Icon fontSize="medium" color="primary" title={'show_password'}>
                                                            <VisibilityIcon />
                                                        </Icon>
                                                    ) : (
                                                        <Icon fontSize="medium" color="primary" title={'hide_password'}>
                                                            <VisibilityOffIcon />
                                                        </Icon>
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    className="font-weight-bold"
                                    variant="contained"
                                    color="primary"
                                    disabled={false}
                                    type="submit"
                                    style={{ width: '100%' }}
                                >
                                    {'Đăng nhập'}
                                </Button>
                            </Grid>
                        </Grid>
                    </ValidatorForm>
                </Grid>
            </Card>
        </div>
    );
}

export default SignIn;
