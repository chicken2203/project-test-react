import { Autocomplete, Button, Grid, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { SelectValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
function ActionBar(props) {
    const [age, setAge] = useState('');
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Grid className="p-20">
            <ValidatorForm
                className="bg-pale-gray"
                onSubmit={() => {}}
                style={{
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 20,
                }}
            >
                <Grid container justify="space-between" item xl={12} md={12} sm={12} xs={12}>
                    <Grid item container spacing={1} xl={10} md={10} sm={10} xs={10}>
                        <Grid item xl={3} md={3} sm={3} xs={3}>
                            <SelectValidator
                                className="w-100"
                                label={
                                    <span className="font">
                                        <span style={{ color: 'red' }}> * </span>
                                        {'Catolegary'}
                                    </span>
                                }
                                value={age}
                                onChange={handleChange}
                                size="small"
                                variant="outlined"
                                InputProps={{
                                    inputProps: { placeholder: 'loai' },
                                }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </SelectValidator>
                            {/* <Autocomplete
                                className="w-100 mb-10"
                                options={leaderList}
                                getOptionLabel={(leader) => leader.leaderName}
                                onChange={(event, value) => {
                                    handleChange({ target: { name: 'leader', value } });
                                }}
                                renderInput={(params) => (
                                    <TextValidator
                                        {...params}
                                        value={formData?.leaderName}
                                        label={
                                            <span className="font">
                                                <span style={{ color: 'red' }}> * </span>
                                                {'Tên lãnh đạo'}
                                            </span>
                                        }
                                        variant="outlined"
                                        fullWidth
                                        validators={['required']}
                                        errorMessages={['Không được bỏ trống']}
                                        size="small"
                                    />
                                )}
                            /> */}
                        </Grid>
                        <Grid item xl={3} md={3} sm={3} xs={3}>
                            <TextField
                                className="w-100"
                                placeholder={'Tìm kiếm...'}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                                value={search}
                                type="text"
                                name="search"
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                        <Grid item container spacing={1} xl={6} md={6} sm={6} xs={6}>
                            <Grid item>
                                <Button variant="contained" onClick={() => {}}>
                                    {'Loc'}
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" onClick={() => {}}>
                                    {'Huy bo'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container className="flex-end" spacing={1} item xl={2} md={2} sm={2} xs={2}>
                        <Grid item>
                            <Link to="/product/addnew" activeClassName="active">
                                <Button variant="contained">{'Them moi'}</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </ValidatorForm>
        </Grid>
    );
}

export default ActionBar;
