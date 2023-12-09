import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getFromLocalStorage } from '~/services/LocalstorageServies';

const API_ENPOINT = 'https://api.escuelajs.co/api/v1';

export const getUser = createAsyncThunk('login/getUser', async () => {
    const token = getFromLocalStorage('access_token');
    const response = await axios.get(API_ENPOINT + '/auth/profile', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
});

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loading: false,
        user: null,
    },
    reducers: {
        signOut(state) {
            state.user = {};
        },
    },
    extraReducers: (builder) => {
        //get all employees
        builder
            .addCase(getUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action?.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                alert('Nhap sai user name or password');
            });
    },
});

export const { signOut } = loginSlice.actions;
export default loginSlice.reducer;
