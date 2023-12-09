import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_ENPOINT = 'https://api.escuelajs.co/api/v1';

export const readData = createAsyncThunk('products/readData', async () => {
    const response = await axios.get(API_ENPOINT + '/products');
    return response.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        listProducts: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        //get all products
        builder
            .addCase(readData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(readData.fulfilled, (state, action) => {
                state.loading = false;
                state.listProducts = action?.payload;
            })
            .addCase(readData.rejected, (state, action) => {
                state.loading = false;
                alert('Nhap sai user name or password');
            });
    },
});

// eslint-disable-next-line no-empty-pattern
export const {} = productsSlice.actions;
export default productsSlice.reducer;
